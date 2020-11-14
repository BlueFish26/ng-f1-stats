import { Injectable } from '@angular/core';
import { Observable, ObservableLike, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Constructor } from '../models/constructors.models';
import { Race } from '../models/races.models';
import { QualifyingResult, RaceResult } from '../models/results.models';

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

  getRaceResults(round: string): Observable<RaceResult[]> {
    return this.http.get(`${this.apiRoot}/current/${round}/results.json`)
      .pipe(
        map(this.formatRaceResultData),
        catchError(this.errorHandler)
      );
  }

  private formatRaceData(data: any) {
    data.MRData.RaceTable.Races.forEach((race: Race) => {
      race.track_img = `assets/img/track_${race.round}.png`;
      race.country_flag_img = `assets/img/flag_${race.Circuit.Location.country.toLowerCase()}.png`;
      race.QualifyingResult = [];
      race.RaceResult = []
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

  private formatRaceResultData(data: any) {
    data.MRData.RaceTable.Races[0].Results.forEach((r: RaceResult) => {
      r.Driver.helmet_img = `assets/img/driver_helmet_${r.Driver.code.toLowerCase()}.png`;
    });
    console.log(data.MRData.RaceTable.Races[0].Results);
    return data.MRData.RaceTable.Races[0].Results;
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
