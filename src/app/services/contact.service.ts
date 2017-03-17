import { Injectable } from '@angular/core';
import { Note } from '../contacts/contact';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
    private contactsUrl = '/api/contacts';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getNotes(): Promise<Note[]> {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then(response => response.json() as Note[])
                 .catch(this.handleError);
    }

    // post("/api/contacts")
    createNote(newNote: Note): Promise<Note> {
      return this.http.post(this.contactsUrl, newNote)
                 .toPromise()
                 .then(response => response.json() as Note)
                 .catch(this.handleError);
    }

    // get("/api/contacts/:id") endpoint not used by Angular app

    // delete("/api/contacts/:id")
    deleteNote(delContactId: String): Promise<String> {
      return this.http.delete(this.contactsUrl + '/' + delContactId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/contacts/:id")
    updateContact(putContact: Note): Promise<Note> {
      var putUrl = this.contactsUrl + '/' + putContact._id;
      return this.http.put(putUrl, putContact)
                 .toPromise()
                 .then(response => response.json() as Note)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}