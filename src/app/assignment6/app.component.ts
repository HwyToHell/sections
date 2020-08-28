import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ViewChild is used here for getting the onInspection() state only !
  // in onSubmit() the local form reference of the template is used
  @ViewChild('f') formData: NgForm
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  subscriptionDefault = this.subscriptions[0];

  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value.email);
    console.log(f.value.password);
    console.log(f.value.subscription);
  }

  onInspect() {
    console.log("email valid: ", this.formData.controls.email.valid);
    console.log("password valid:", this.formData.controls.password.valid);
    //console.log(this.formData);
  }

}
