import { Component } from '@angular/core'

@Component({
    selector: 'login-container',
    styles: [`
    form {
        background-color: white;
        display: inline-block;
    }
  `],
    template: `
    <div class="login-container">
    
      <h1>Login Page</h1>

    <h3> Welcome </h3>
    
    <form>
        <input id = "email" type="text" required placeholder="Enter your email"> 
        <input id = "pass" type="text" required placeholder="********"> 
    </form>
	<input type="submit" class ="btn btn-primary" value = "Login!">


    </div>
    `
}) export class Login {}




    
		
