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
  user = {
    name: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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
    //console.log(this.signupForm);
    //console.log(this.signupForm.valid);

    this.submitted = true;

    this.user.name = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.emailaddress;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // reset form after form data have been transmitted to application
    this.signupForm.reset();
  }

  onReset() {
    this.signupForm.reset();
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
