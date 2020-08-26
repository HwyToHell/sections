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
  defaultQuestion = "pet";
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* //@ViewChild approach
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        emailaddress: '' 
      },
      secret: 'teacher',
      questionAnswer: '',
      gender: 'male'
    }); */

    // use form.patchValue() method
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      },
      secret: 'teacher',
      gender: 'male'
    });

  }

  // use @ViewChild method
  onSubmit() {
    console.log(this.signupForm);
    //console.log(this.signupForm.valid);
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
