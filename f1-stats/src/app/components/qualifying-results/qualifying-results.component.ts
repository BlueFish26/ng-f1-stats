import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RacesLoadQualifyingStart } from 'src/app/actions/races.actions';
import { Race } from 'src/app/models/races.models';
import { QualifyingResult } from 'src/app/models/results.models';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qualifying-results',
  templateUrl: './qualifying-results.component.html',
  styleUrls: ['./qualifying-results.component.css']
})
export class QualifyingResultsComponent implements OnInit {
  //@Input() round: string;
  constructor(private store: Store<{ races: Race[] }>, @Inject(MAT_DIALOG_DATA) public round: string,) { }

  races$: Observable<Race[]> = this.store.select(store => store.races);

  qualiyingResult: QualifyingResult[];

  ngOnInit(): void {
    console.log(this.round)
    this.store.dispatch(RacesLoadQualifyingStart({ round: this.round }));
    this.races$.subscribe((data) => {
      console.log("races", data);
      // if (races) {
      //   let filteredRace = races.filter(r => r.round == this.round)[0];
      //   console.log(filteredRace);

      //   if (filteredRace.QualifyingResult) {
      //     this.qualiyingResult = filteredRace.QualifyingResult
      //     console.log(this.qualiyingResult);
      //   }
      // }
    });

  }

}
