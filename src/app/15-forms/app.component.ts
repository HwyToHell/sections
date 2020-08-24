import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // use ViewChild method, pointing to local reference in template
  @ViewChild('form') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // use @ViewChild method
  onSubmit() {
    //console.log(this.signupForm);
    console.log(this.signupForm.valid);
  }


  // use NgForm model method
  /* 
  onSubmit(form: NgForm) {
    console.log("submitted");
    console.log(form);
    //console.log(form.value);
  }
  */
}
