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

import { F1Service } from "./services/f1-service";
import { RacesComponent } from './pages/races/races.component';
import { RaceResultsComponent } from './pages/race-results/race-results.component';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { DriversComponent } from './pages/drivers/drivers.component';


@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceResultsComponent,
    ConstructorsComponent,
    DriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule, MatIconModule, MatMenuModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [F1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
