import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { ValidationService } from './validation.service';
import { NextTrip } from './next-trip.button';


@Component({
    selector: 'trips-container',
    styleUrls: [`app/containers/trips.component.css`],
 	templateUrl: 'app/containers/trips.html',

}) export class Trips {


	  userForm: any;
	  
	  constructor(private formBuilder: FormBuilder) {
	      
	    this.userForm = this.formBuilder.group({
	      'name': ['', [Validators.required, Validators.minLength(1)]],
	     
	    });
	    
	    console.log(this.userForm);
	  }
	  
	  saveUser() {
	    if (this.userForm.dirty && this.userForm.valid) {
	    	// save name = trip name goes onto app header only after 

	    	
	    }

	  }




}
