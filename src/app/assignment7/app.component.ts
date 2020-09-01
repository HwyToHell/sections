import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];
  states = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'project': new FormControl(null, Validators.required, this.validateProjectName),
      'email': new FormControl(null, [Validators.required, 
        Validators.email]),
      'stateSelect': new FormControl(this.states[2])
    });
  }

  onSubmit() {
    for (let control in this.projectForm.controls) {
      console.log(control + ": " + this.projectForm.controls[control].value);
    }
  }

  validateProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
