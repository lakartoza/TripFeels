import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`h1 {
  margin: auto;
  color: #ffc957;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.note-creator {
  padding: 28px;
  margin-bottom: 114px;
  background-color: white;
  border-radius: 3px;
  border-style: solid;
  border-color:  #ffc957;
  
}
.title {
  font-weight: bold;
  color: rgba(0,0,0,0.8);
  border-style: solid;
  border-width: 1px; 
  border-color: #ffc957; 
  

}

.value {
  border-style: solid;
  border-width: 1px; 
  border-color: #ffc957; 
}
.full {
  height: 100px;
}

input
{
justify-content: center;
align-items: center;
text-align: center;
margin: 12px 60px 3px 28px;
color: #ffc957;
border-style: none;
display: inline-block;
/* width: 41px; */
height: 34px;
text-transform: uppercase;
  border-style: solid;
  border-width: 1px; 
  border-color: #ffc957; 
}

.btn-light {
   margin-top: 12px;
  padding: 7px;
  background-color: #ffc957;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
  border-style: none;
}

.creator {
  margin: auto;
  width: 30%;

}`],
  template : `
  
    <div class ="creator .col-xs-12">


          <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
            <form class="row" (ngSubmit)="onCreateNote()">
              <input
                type="text"
                (focus)="toggle(true)"
                [(ngModel)]="newNote.title"
                name="newNoteTitle"
                placeholder="NOTE TITLE"
                class="col-xs-10 title"
                *ngIf="0"
              >
              <input
                type="text"
                (focus)="toggle(true)"
                [(ngModel)]="newNote.value"
                name="newNoteValue"
                placeholder=" PICK YOUR ACTIVITY NAME + COLOR"
                class="col-xs-10"
              >
              <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
                <div class="col-xs-3">
                  <color-picker
                    (selected)="onColorSelect($event)"
                    [colors]="colors"
                  >
                  </color-picker>
                </div>
                <button
                  type="submit"
                  class="btn-light"
                 >
                  Done
                </button>
              </div>
            </form>
          </div>
`
})
export class NoteCreator {
 
 @Output() createNote = new EventEmitter();

  colors: Array<string> = ['Location', 'Lodging', 'Activity', 'Transport'];

  newNote = {
    title: '',
    value: '',
    color: 'white',
  };

  fullForm: boolean = false;

  onCreateNote() {
    const { title, value, color} = this.newNote;

    if (value) {
      var colorChoice = []; 
      this.createNote.next({ title, value, color});
    }

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.newNote = {
      title: 'purple',
      value: '',
      color: 'white'
    };
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    console.log(color);
    if (color == 'Location') {
      this.newNote.title = "purple";
      this.newNote.color = '#B19CD9';
    }
    if (color == 'Lodging') {
      this.newNote.title = "red";
      this.newNote.color = '#FF6961';      
    }
    if (color == 'Activity') {
      this.newNote.title = "green";
      this.newNote.color = '#77DD77';      
    }
    if (color == 'Transport') {
      this.newNote.title = "yellow";
      this.newNote.color = '#FFC957';      
    }    
  }
}