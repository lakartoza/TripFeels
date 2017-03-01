import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'next-button-container',
    styleUrls: [`app/containers/trips.component.css`],
 	templateUrl: 'app/containers/trips.html',

}) export class NextTrip {
    constructor(private router: Router) { }

	btnClick= function () {
	        this.router.navigateByUrl('/notes');
	};

}
