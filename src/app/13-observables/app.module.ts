import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './13-observables/app.component';
import { HomeComponent } from './13-observables/home/home.component';
import { UserComponent } from './13-observables/user/user.component';
import { AppRoutingModule } from './13-observables/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
