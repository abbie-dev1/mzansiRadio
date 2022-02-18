import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RadioComponent } from './radio/radio.component';
import { StationsComponent } from './stations/stations.component';

const routes: Routes = [
  { path:"",redirectTo: "landing",pathMatch: "full" },
  { path:"landing",component:LandingComponent},
  { path:"radio",component:RadioComponent },
  { path:"stations",component:StationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
