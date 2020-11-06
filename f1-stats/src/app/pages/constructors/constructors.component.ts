import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Constructor } from 'src/app/models/constructors.models';
import { MatDialog } from '@angular/material/dialog';
import { DriversComponent } from '../drivers/drivers.component';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css']
})
export class ConstructorsComponent implements OnInit {

  constructors$: Observable<Constructor[]> = this.store.select(store => store.constructors);
  constructor(private store: Store<{ constructors: Constructor[] }>, public dialog: MatDialog) { }
  panelOpenState = false;
  ngOnInit(): void {
    this.store.dispatch({ type: "[CONSTRUCTORS] Load Constructors" })
  }

  openDialog() {
    this.dialog.open(DriversComponent);
  }

}
