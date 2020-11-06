import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { Constructor } from '../models/constructors.models';
import { Race } from '../models/races.models';
import { F1Service } from "../services/f1-service";

@Injectable()
export class ContructorsEffects {

    loadRaces$ = createEffect(() => this.actions$.pipe(
        ofType('[CONSTRUCTORS] Load Constructors'),
        concatMap(action => of(action).pipe(
            withLatestFrom(this.store.select(store => store.constructors)),
        )),
        mergeMap(([action, constructors]) => {
            if (constructors.length > 0) {
                console.log('CONSTRUCTORS Loaded Already');
                return []; //to prevent error when reloading
            } else {
                return this.f1Service.getConstructors()
                    .pipe(
                        map(constructors => {
                            console.log("constructors", constructors);
                            return { type: '[CONSTRUCTORS] Load Success', payload: <Constructor[]>constructors }
                        }),
                        catchError(() => EMPTY)
                    )
            }
        })
    )
    );

    constructor(
        private actions$: Actions,
        private f1Service: F1Service,
        private store: Store<{ constructors: Constructor[] }>
    ) { }
}