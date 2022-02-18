import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { StationsComponent } from './stations/stations.component';
import { StationListComponent } from './station-list/station-list.component';
import { RadioComponent } from './radio/radio.component';
import { AngMusicPlayerModule } from 'ang-music-player';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StationsComponent,
    StationListComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngMusicPlayerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
