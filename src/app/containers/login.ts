import { Component } from '@angular/core'

@Component({
    selector: 'login-container',
    styleUrls: [`app/containers/login.component.css`],
    template: `

    <div class = "container">

            <!--<div class = "tiny-hex"> </div>-->
    
        <div id = "section-title">
            <h1> <b>B-STORM </b></h1>
            <p id = "slogan"> A Brainstorming Application for Planning Trips <p>
            <div id = "form">
                <input type="text" id="name" name="name" required placeholder="NAME"> <p>
                <input type="email" id="email" name="email" required placeholder="EMAIL ADDRESS"><p>
                <input type="text" id="pw" name="pw" required placeholder=" PASSWORD"> <p>
                <a href="add-trip">
                    <input type="submit" class = "button-login" value = "START B-STORMING">
                </a>
            </div>
        </div>
        
            <div class="hexagon"></div>

    </div> 
    `
}) export class Login {}




    
		
