import { Component } from '@angular/core'

@Component({
    selector: 'addtrip-container',
    styles: [`
    html {
    color: #ffc957;
}

a {
  color: #ffc957;
  text-decoration: none;
}

a:link{
  text-decoration: none;
  color: #ffc957;
}

a:hover {
  text-decoration: none;
  color: #ffc957;
}

a:visted {
  text-decoration: none;
  color: #ffc957;
}

a:active{
  text-decoration: none;
  color: #ffc957;
}
h1{
  color: #ffc957;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  color: #ffc957;
}

h2, h3{
  color: #ff5d55;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
      position: relative;
    top: 120px;
    right: 30px;
}

.container {
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 50px;
    width: 36%;
   
}

.fa-plus-circle {
    font-size: 50px;
}

.hexagon {
  position: relative;
  width: 300px; 
  height: 173.21px;
  background-color: #f7f6f6;
  margin: 86.60px 0;
  margin: 20px;
  -ms-transform: rotate(-30deg); /* IE 9 */  
  -webkit-transform: rotate(-30deg); /* Chrome, Safari, Opera */
  transform: rotate(-30deg);
  z-index: 1;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 86.60px solid #f7f6f6;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 86.60px solid #f7f6f6;
}

#trip-text {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
    z-index: 2;
    position: relative;
    top: 177px;
    right: 35px;
}
.hex-container {
     margin-top: 88px;
}

#trip-text2 {
    color: #ff5d55;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    position: relative;
    top: 120px;
    right: 30px;
}
    `],
    template : `
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