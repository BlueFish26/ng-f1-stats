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
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

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
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    StoreModule.forRoot(
      {
        races: raceReducer,
        constructors: constructorReducer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([RacesEffects, ContructorsEffects])
  ],
  providers: [F1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
