import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { RacesLoaded, RacesLoadQualifyingStart, RacesLoadQualifyingSuccess } from '../actions/races.actions';
import { Race } from '../models/races.models';
import { QualifyingResult } from '../models/results.models';
import { F1Service } from "../services/f1-service";

@Injectable()
export class RacesEffects {

    loadRaces$ = createEffect(() => this.actions$.pipe(
        ofType('[RACES] Load Races'),
        concatMap(action => of(action).pipe(
            withLatestFrom(this.store.select(store => store.races)),
        )),
        mergeMap(([action, races]) => {
            if (races.length > 0) {
                console.log('Races Loaded Already');
                return []; //to prevent error when reloading
            } else {
                return this.f1Service.getRaces()
                    .pipe(
                        map(races => {
                            console.log("races", races);
                            return { type: '[RACES] Load Success', payload: <Race[]>races }
                        }),
                        catchError(() => EMPTY)
                    )
            }
        })
    )
    );

    loadQualifyingResults$ = createEffect(
        () => this.actions$.pipe(
            ofType(RacesLoadQualifyingStart),
            concatMap(action => of(action).pipe(
                withLatestFrom(this.store.select(store => store.races)),
            )),
            mergeMap(([action, races]) => {
                let thisRace: Race = races.filter((race: Race) => race.round == action.round)[0];
                if (thisRace.QualifyingResult.length == 0) {
                    return this.f1Service.getQualifyingResults(action.round)
                        .pipe(
                            map(results => {
                                console.log("results", results);
                                return RacesLoadQualifyingSuccess({ round: action.round, payload: <QualifyingResult[]>results });
                                //return { type: '[RACES] Load Success', payload: <QualifyingResult[]>results }
                            }),
                            catchError(() => EMPTY)
                        )
                } else {
                    console.log('This qualy is already loaded');
                    return [];
                }

            })
        )
    );

    constructor(
        private actions$: Actions,
        private f1Service: F1Service,
        private store: Store<{ races: Race[] }>
    ) { }
}