import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
    selector: 'login-container',
    styleUrls: [`app/containers/login.component.css`],
    templateUrl : 'app/containers/login.html'

}) export class Login {

 

  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(1)]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(5), ValidationService.passwordValidator]]
    });
    
    console.log(this.userForm);
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }

  }


}




    
		
