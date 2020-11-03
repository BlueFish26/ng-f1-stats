import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class F1Service {

  getRacesEndpoint: string = "http://ergast.com/api/f1/current.json";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) { }

  getRaces(): Observable<any> {
    return this.http.get(this.getRacesEndpoint)
      .pipe(
        map(this.formatRaceData),
        catchError(this.errorHandler)
      );
  }

  formatRaceData(data: any) {
    data.MRData.RaceTable.Races.forEach(r => {
      r.track_img = `assets/img/track_${r.round}.png`;
    });
    return data.MRData.RaceTable.Races;
  }

  errorHandler(error: HttpErrorResponse) {
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
