import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  styles: [`

    h1, h2, h3{
      color: #ffc957;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align: center;
      color: #ffc957;


    }
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      font-weight: bold;
    }
    .logo {
      color: white;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: #ffc957;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
      display: inline-block;
    }
    .fa-2x {
      position: fixed; 
    }

    #help {
      margin: 20px;
    }

    #home {
      margin: 20px;
    }


  `],
  template: `
    <header class="app-bar row middle-xs">
      <span [routerLink]="[Main]" class="logo col-xs-10">
        Retain
      </span>
      <nav class="col-xs-2">

        <div id = "links">

            <div id = "home">
     
              <span [routerLink]="['', '']" class="link"><i class="fa fa-home fa-2x" aria-hidden="true"></i></span>

              <div class="row middle-xs between-xs">
                <span [routerLink]="['', 'about']" class="link"><i class="fa fa-question-circle-o fa-2x" aria-hidden="true"></i></span>
              </div>
          </div>
        </div> 
      </nav>
    </header>
   
  `
})
export class AppBar {}
