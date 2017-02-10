import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
    .hexagon {
      position: relative;
      width: 140px; 
      height: 80.83px;
      background-color: #64C7CC;
      margin: 40.41px 0;
    }

    .hexagon:before,
    .hexagon:after {
      content: "";
      position: absolute;
      width: 0;
      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
    }

    .hexagon:before {
      bottom: 100%;
      border-bottom: 40.41px solid #64C7CC;
    }

    .hexagon:after {
      top: 100%;
      width: 0;
      border-top: 40.41px solid #64C7CC;
    }

  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked($event, i)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes {
  notes = [
    {title: 'Chores', value: 'Don\'t forget to clean up', color: 'lighblue'},
    {title: 'Food', value: 'meal prep tonight please!', color: 'seagreen'},
    {title: 'Shipping Number', value: '#234654hhd88', color: 'pink'}
  ];

  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  }

  onCreateNote(note) {
    this.notes.push(note);
  }
}
