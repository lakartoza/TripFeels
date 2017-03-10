import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
// import {Router, NavigationEnd} from '@angular/router';
// declare let ga: Function;

@Component({
  selector: 'app',
  styles: [`
/*Loader*/

.spinner {
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color:  #ffc957;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}`],
  template: `
    <div>
      <router-outlet></router-outlet>

    </div>


  `
})
export class App {
  //   constructor(public router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       ga('set', 'page', event.urlAfterRedirects);
  //       ga('send', 'pageview');
  //     }
  //   });


  // }
}
