import { Component } from '@angular/core'

@Component({
    selector: 'about-container',
    styleUrls: [`app/containers/about.component.css`],
    template: `

    <div class = "container">
     


        <h4> ADD NEW TRIP </h4> <p>
        <div class="section group">
			<div class="col span_1_of_2">
				<div class = "tiny-hex" ></div> 
			</div>
			<div class="col span_1_of_2">
			<input type="text" id="trip-name" name="trip-name" required placeholder="TRIP NAME"> <p>
			</div>
		</div>
	    <h4> ADD FRIENDS </h4> <p>
        <div class="section group">
			<div class="col span_1_of_2">
				<div class = "tiny-hex" ></div> 
				<div class ="button-hex">
			</div>
			<div class="col span_1_of_2">
			<input type="email" id="email" name="email" required placeholder=" ADD E-MAIL "> 
			</div>
		</div>
        <div class="section group">
			<div class="col span_1_of_2">
				<div class = "tiny-hex" ></div> 
			</div>
			<div class="col span_1_of_2">
			<input type="email" id="email" name="email" required placeholder=" ADD E-MAIL "> 
			</div>
		</div>



		<div id = "instruct">
	        Invite other users to collaborate on your trip planning. Once you begin your B-storm, your selected users will receive an email invite.
        </div>
        <a href="add-trip">
	        <input type="submit" class = "button-login" value = "START B-STORMING">
        </a>
    </div> 
    
    `
}) export class About {}