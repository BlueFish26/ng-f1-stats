import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorsComponent } from './pages/constructors/constructors.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { RaceResultsComponent } from './pages/race-results/race-results.component';
import { RacesComponent } from "./pages/races/races.component"

const routes: Routes = [
  {
    path: "races",
    component: RacesComponent,
    pathMatch: "full"
  },
  {
    path: "race-result/:round",
    component: RaceResultsComponent,
    pathMatch: "full"
  },
  {
    path: "constructors",
    component: ConstructorsComponent,
    pathMatch: "full"
  },
  {
    path: "drivers",
    component: DriversComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
