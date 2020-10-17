import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './assignment8/app.component';
import { ReversePipe } from './assignment8/reverse.pipe';
import { SortPipe } from './assignment8/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
