import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`

    h1{
      color: #ffc957;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align: center;

    }
    .note-creator {
      padding: 32px;
      background-color: white;
      border-radius: 0px;
      margin-bottom: 30px;
      width: 39%;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
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
      margin: 10px 50px;
      padding: 20px;
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
    <h1> Add an idea + color! </h1>
    <div class="col-xs-12 col-lg-12">


        <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
          <form class="row" (ngSubmit)="onCreateNote()">
            <input
              type="text"
              (focus)="toggle(true)"
              [(ngModel)]="newNote.value"
              name="newNoteValue"
              placeholder="ACTIVITY"
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
  colors: Array<string> = ['#FFA657', '#FFE457', '#C40000', '#36929B', '#F49AC2', '#F4758C'];
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
      title: 'something',
      value: '',
      color:'white'
    };
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }
}
