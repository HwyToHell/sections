import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
// components for assignment 4
import { Assign4Component } from './assign4.component';
import { GameControl } from './assignment4/game-control/game-control.component';
import { Even } from './assignment4/even/even.component';
import { Odd } from './assignment4/odd/odd.component'

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    Assign4Component,
    GameControl,
    Even,
    Odd
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [Assign4Component]
})
export class AppModule { }
