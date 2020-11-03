import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { F1Service } from 'src/app/services/f1-service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private f1Service: F1Service) { }

  raceId: Number;
  races: any;

  ngOnInit(): void {

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.raceId = params.id;
    //     console.log('RaceId', this.raceId);
    //   }
    // );

    this.f1Service.getRaces().subscribe(
      (data: any) => {
        console.log(data)
        this.races = data;
      }
    )


  }

}
