import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['/src/app/app.css'],
  template: `
    <div>
      <router-outlet></router-outlet>

    </div>


  `
})
export class App {}
