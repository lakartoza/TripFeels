import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [
    `h1 {
  margin: auto;
  color: #ffc957;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.note-creator {
  padding: 20px;
  background-color: white;
  border-radius: 3px;
}
.title {
  font-weight: bold;
  color: rgba(0,0,0,0.8);
}
.full {
  height: 100px;
}

input
{
justify-content: center;
align-items: center;
text-align: center;
margin: 10px 60px;
color: #ffc957;
border-style: none;
display: inline-block;
width: 50px;
height: 34px;
text-transform: uppercase;
}

.btn-light {
  margin-top: 20px;
  background-color: #ffc957;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
  font-style: bold;
  border-style: none;
}    
`],
  template: `
    <div class="col-xs-12 col-lg-12">

        <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
          <form class="row" (ngSubmit)="onCreateNote()">
            <input
              type="text"
              (focus)="toggle(true)"
              [(ngModel)]="newNote.title"
              name="newNoteTitle"
              placeholder="LOCATION"
              class="col-xs-10 title"
              *ngIf="fullForm"
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

    </div>
`
})
export class NoteCreator {

  @Output() createNote = new EventEmitter();

  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  fullForm: boolean = false;

  onCreateNote() {
    const { title, value, color } = this.newNote;

    if (title && value) {
      this.createNote.next({ title, value, color });
    }

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }
}