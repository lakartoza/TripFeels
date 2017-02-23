import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-card',
  styles: [`
    .note-card {
      padding: 15px;
      border-radius: 2px;
      width: 100%;
      height: 150px;
      position: relative;
      margin-right: 20px;

    }
    .title {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: left;
      color: rgba(0,0,0,0.8);
      text-transform: uppercase;
    }

    .value {
      text-align: left;
      font-size: 1.4rem;
      font-weight: 200;
      text-transform: uppercase;
    }
    .icon {
      position: absolute;
      color: black;
      border: 1px solid lightgrey;
      background-color: white;
      font-size: 30px;
      top: -10px;
      left: -10px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      cursor: pointer;
    }
    .hex-section {
      text-align: center;

    }

    #grid li {
    list-style-type: none;
    position: relative;
    float: left;
    width: 27.85714285714286%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 150px 100px 143px;
    border-color: transparent transparent #007bff transparent;
    
  
    }


    #grid li .hexagon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 115px 100px 115px;
        border-color: transparent transparent #007bff transparent;

    }

    #grid li * {
    visibility: visible;
    }


    #grid-bottom li {
    list-style-type: none;
    position: relative;
    /* float: left; */
    width: 0;
    height: 0;
    right: 30px;
    border-style: solid;
    border-width: 117px 152px 0 145px;
   

    }


    #grid-bottom li .hexagon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        width: 0;
        height: 0;

    }

    #grid-bottom li * {
    visibility: visible;
    }


  `],
  template: `

    <ul id="grid" class="clear col-xs-4" [ngStyle]="{'background-color': note.color}" >
        <li [ngStyle]="{'background-color': note.color}">
            <div class="hexagon"></div>
        </li>
    </ul>



    <div
      class="note-card row shadow-1"
      [ngStyle]="{'background-color': note.color}"
      (mouseenter)="toggleCheck()"
      (mouseleave)="toggleCheck()"
    >
      <div class="icon" *ngIf="showCheck" (click)="onChecked()">
        <i class="material-icons">check</i>
      </div>
      <div class = "hex-section">
        <div class="col-xs-12 title">
          {{ note.title }}
        </div>
        <div class="col-xs-12 value">
          {{ note.value }}
        </div>
      </div>
    </div>

    <ul id="grid-bottom" class="clear col-xs-4" [ngStyle]="{' border-color': blue transparent transparent transparent}" >
    <li [ngStyle]="{'background-color': note.color}">
        <div class="hexagon-bottom"></div>
    </li>
    </ul>
  `
})
export class NoteCard {
  @Input() note = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.note);
  }
}
