import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState, Race, selectRaces } from 'src/app/models/races.models';


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races$: Observable<Race[]> = this.store.select(store => store.races);

  raceList: Race[];
  constructor(
    private route: ActivatedRoute,
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



}
