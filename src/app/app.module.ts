import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components for section 5 components databinding
import { AppComponent } from './5-databinding/app.component';
import { CockpitComponent } from './5-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './5-databinding/server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [Assign4Component]
})
export class AppModule { }
