import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  styles: [`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: #FFFFFF;
    }
    .logo {
      color: #ff5d55;
      font-size: 30px;
      /* font-family: "Open Sans";*/
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: white;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
    }
  `],
  template: `
    <header class="app-bar row middle-xs">
      <span class="logo col-xs-10">
        <b>Trip Feels</b> - Trip Summer 2017
      </span>
      <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span class="link">Settings</span>
          <span class="link">signout</span>
        </div>
      </nav>
    </header>
  `
})
export class AppBar {}
