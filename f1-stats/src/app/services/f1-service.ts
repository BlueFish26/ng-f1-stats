import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Constructor } from '../models/constructors.models';
import { Race } from '../models/races.models';
import { QualifyingResult } from '../models/results.models';

@Injectable({
  providedIn: 'root'
})
export class F1Service {

  apiRoot: string = "http://ergast.com/api/f1";

  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) { }

  getRaces(): Observable<Race[]> {
    return this.http.get(`${this.apiRoot}/current.json`)
      .pipe(
        map(this.formatRaceData),
        catchError(this.errorHandler)
      );
  }

  getConstructors(): Observable<Constructor[]> {
    return this.http.get(`${this.apiRoot}/current/constructorStandings.json`)
      .pipe(
        map(this.formatConstructorData),
        catchError(this.errorHandler)
      );
  }

  getQualifyingResults(round: string): Observable<QualifyingResult[]> {
    return this.http.get(`${this.apiRoot}/current/${round}/qualifying.json`)
      .pipe(
        map(this.formatQualifyingResultData),
        catchError(this.errorHandler)
      );
  }

  private formatRaceData(data: any) {
    data.MRData.RaceTable.Races.forEach((race: Race) => {
      race.track_img = `assets/img/track_${race.round}.png`;
      race.QualifyingResult = [];
    });
    return data.MRData.RaceTable.Races;
  }

  private formatConstructorData(data: any) {
    data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.forEach((c: any) => {
      c.constructor_img = `assets/img/constructor_${c.Constructor.constructorId}.png`;
    });
    return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
  }

  private formatQualifyingResultData(data: any) {
    return data.MRData.RaceTable.Races[0].QualifyingResults;
  }

  private errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
