import { Component, OnInit, createPlatform } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];

  forbiddenEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() =>{
        if (control.value === 'test@test.com') {
          resolve({'isEmailForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      // invalid -> returns error code as key-value pair
      return {'isNameForbidden': true};
    } else {
      // valid -> must return null
      return null;
    }
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, 
          this.forbiddenNamesValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],
          this.forbiddenEmailValidator)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );

    // setValue -> all controls must be provided
    this.signupForm.setValue({
      'userData': {
        'username': 'Anna',
        'email': 'carla.grzonka@web.de'
      },
      'gender': 'female',
      'hobbies': []
    });

    // patchValue -> subset of controls possible
    this.signupForm.patchValue({
      'userData': {
        'username': 'Carla'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
