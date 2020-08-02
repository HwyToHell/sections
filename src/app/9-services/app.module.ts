import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components for section 5 components databinding
import { Section9Component } from './9-services/section9.component';
import { AccountComponent } from './9-services/account/account.component';
import { NewAccountComponent } from './9-services/new-account/new-account.component';
import { AccountsService } from './9-services/accounts.service';
import { LoggingService } from './9-services/logging.service';



@NgModule({
  declarations: [
    Section9Component,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  //bootstrap: [AppComponent],
  bootstrap: [Section9Component]
})
export class AppModule { }
