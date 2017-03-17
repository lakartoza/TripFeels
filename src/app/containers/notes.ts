import { Component, OnInit } from '@angular/core';
// import { NoteService, ApiService, ContactService } from '../services/';
import { ContactService } from '../services/';
import { Note } from '../contacts';

@Component({
  selector: 'notes-container',
  styles: [`
  .bs-note {
    display: inline-block;
    text-align: center;
  }
  `],
  template: `
  <div class="notes">
    <div class="creator">
    <note-creator (createNote)="onCreateNote($event)"></note-creator>
    </div>
    <div class="notes">
        <note-card
            class="bs-note"
            [note]="note"
            *ngFor="let note of notes"
            (checked)="onNoteChecked($event)"
            >
        </note-card>
    </div>
</div>
  `,
    providers: [ContactService]
})

export class Notes implements OnInit {
  notes: Note[];
  // contacts: Contact[];

  constructor(private noteService: ContactService) { }
  //   this.noteService.getNotes()
  //   .subscribe(resp => this.notes = resp.data)
  // }

  ngOnInit() {
      this.noteService
        .getNotes()
        .then((notes: Note[]) => {
          this.notes = notes.map((note) => {
            // if (!note.phone) {
            //   note.phone = {
            //     mobile: '',
            //     work: ''
            //   }
            // }
            return note;
          });
        });
    }

    private getIndexOfContact = (contactId: String) => {
      return this.notes.findIndex((contact) => {
        return contact._id === contactId;
      });
    }

    onCreateNote = (note: Note) => {
      this.noteService
        .createNote(note)
        .then(note => this.notes.push(note))
    }
     

    onNoteChecked(note: Note) {
      this.noteService
      .deleteNote(note._id)     
      .then(noteID => {
        const i = this.notes.findIndex(localNote => localNote._id === noteID);
        this.notes.splice(i, 1);
      })
      }  
}
