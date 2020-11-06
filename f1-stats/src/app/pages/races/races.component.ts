import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { Race } from 'src/app/models/races.models';
import { MatDialog } from '@angular/material/dialog';
import { QualifyingResultsComponent } from 'src/app/components/qualifying-results/qualifying-results.component';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races$: Observable<Race[]> = this.store.select(store => store.races);

  constructor(
    private dialog: MatDialog,
    private store: Store<{ races: Race[] }>) {
  }

  ngOnInit(): void {
    this.store.dispatch({ type: "[RACES] Load Races" });
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.raceId = params.id;
    //     console.log('RaceId', this.raceId);
    //   }
    // );
  }

  openDialog(round: string) {
    const dialogRef = this.dialog.open(QualifyingResultsComponent, { data: round });
    console.log("round", round)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
