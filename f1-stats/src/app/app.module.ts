import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { F1Service } from "./services/f1-service";
import { RacesComponent } from './pages/races/races.component';
import { RaceResultsComponent } from './pages/race-results/race-results.component';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { DriversComponent } from './pages/drivers/drivers.component';

import { StoreModule } from "@ngrx/store";
import { constructorReducer, raceReducer } from "./reducers/f1.reducer";
import { EffectsModule } from '@ngrx/effects';
import { RacesEffects } from './effects/races.effects';
import { ContructorsEffects } from './effects/constructors.effects';
import { QualifyingResultsComponent } from './components/qualifying-results/qualifying-results.component';


@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceResultsComponent,
    ConstructorsComponent,
    DriversComponent,
    QualifyingResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    StoreModule.forRoot(
      {
        races: raceReducer,
        constructors: constructorReducer
      }
    ),
    EffectsModule.forRoot([RacesEffects, ContructorsEffects])
  ],
  providers: [F1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
