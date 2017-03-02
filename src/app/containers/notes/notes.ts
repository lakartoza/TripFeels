import { Component } from '@angular/core';
import { NoteService, ApiService } from '../../services/';

@Component({
  selector: 'notes-container',
  providers: [NoteService, ApiService],
  styleUrls: [`/src/app/containers/notes/notes.css`],
  template: `
  <div class="notes">
    <div class="creator">
    <note-creator (createNote)="onCreateNote($event)"></note-creator>
    </div>
    <div class="notes">
    <ul class="" id="hexGrid">
        <note-card
            class="hex"
            [note]="note"
            *ngFor="let note of notes"
            (checked)="onNoteChecked($event)"
            >
        </note-card>
    </ul>
    </div>
</div>
  `
})

export class Notes {
  notes = [];

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
    .subscribe(resp => this.notes = resp.data)
  }

  onCreateNote(note) {
    this.noteService.createNote(note)
    .subscribe(note => this.notes.push(note));
  }

  onNoteChecked(note) {
      this.noteService.completeNote(note)
      .subscribe(note => {
        const i = this.notes.findIndex(localNote => localNote.id 
        === note.id);
        this.notes.splice(i, 1);
      })
    }  
}
