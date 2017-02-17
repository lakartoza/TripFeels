import { Component } from '@angular/core'

@Component({
    selector: 'addtrip-container',
    styleUrls: [`app/containers/addtrip.component.css`],
    template: `

    <div class = "container">
    	<div clas ="hex-container">
	    	<div id = "trip-text">
				 <a [routerLink]="['', 'trips']">
				 	<h1> Add New Trip </h1> <p>
				 	<i class="fa fa-plus-circle" aria-hidden="true"></i>
				 </a>
			</div>
	   		<div class="hexagon"></div>
   		</div>
    	<div class ="hex-container">
	    	<div id = "trip-text-2">
				 	<h2> RECENT TRIP #1 </h2> <p>

			</div>
			
	   		<div class="hexagon"></div>
   		</div>

	</div>
    	
    
    `
}) export class AddTrip {}