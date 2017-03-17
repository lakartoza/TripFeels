import { Component, OnInit } from '@angular/core';
import { NoteService, ApiService, ContactService } from '../services/';
import { Contact } from '../contacts';

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
  notes = [];
  contacts: Contact[]

  constructor(private noteService: ContactService) { }
  //   this.noteService.getNotes()
  //   .subscribe(resp => this.notes = resp.data)
  // }

  ngOnInit() {
      this.noteService
        .getNotes()
        .then((contacts: Contact[]) => {
          this.contacts = contacts.map((contact) => {
            // if (!contact.phone) {
            //   contact.phone = {
            //     mobile: '',
            //     work: ''
            //   }
            // }
            return contact;
          });
        });
    }

    onCreateNote = (contact: Contact) => {
      this.contacts.push(contact);
      return this.contacts;
    }



  // onCreateNote(note) {
  //   this.noteService.createNote(note)
  //   .subscribe(note => this.notes.push(note));
  // }

  // onNoteChecked(note) {
  //     this.noteService.completeNote(note)
  //     .subscribe(note => {
  //       const i = this.notes.findIndex(localNote => localNote.id 
  //       === note.id);
  //       this.notes.splice(i, 1);
  //     })
  //   }  
}
