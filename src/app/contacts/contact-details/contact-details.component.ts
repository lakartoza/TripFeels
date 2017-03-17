import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-details',
  template: `
  <div *ngIf="contact" class="row">
  <div class="col-md-12">
    <h2 *ngIf="contact._id">Contact Details</h2>
    <h2 *ngIf="!contact._id">New Contact</h2>
  </div>
</div>
<div *ngIf="contact" class="row">
  <form class="col-md-12">
    <div class="form-group">
      <label for="contact-name">Name</label>
      <input class="form-control" name="contact-name" [(ngModel)]="contact.name" placeholder="Name"/>
    </div>
    <div class="form-group">
      <label for="contact-email">Email</label>
      <input class="form-control" name="contact-email" [(ngModel)]="contact.email" placeholder="support@mlab.com"/>
    </div>
    <div class="form-group">
      <label for="contact-phone-mobile">Mobile</label>
      <input class="form-control" name="contact-phone-mobile" [(ngModel)]="contact.phone.mobile" placeholder="1234567890"/>
    </div>
    <div class="form-group">
      <label for="contact-phone-work">Work</label>
      <input class="form-control" name="contact-phone-work" [(ngModel)]="contact.phone.work" placeholder="0123456789"/>
    </div>
    <button class="btn btn-primary" *ngIf="!contact._id" (click)="createContact(contact)">Create</button>
    <button class="btn btn-info" *ngIf="contact._id" (click)="updateContact(contact)">Update</button>
    <button class="btn btn-danger" *ngIf="contact._id" (click)="deleteContact(contact._id)">Delete</button>
  </form>
</div>
  `
  // styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  createContact(contact: Contact) {
    this.contactService.createContact(contact).then((newContact: Contact) => {
      this.createHandler(newContact);
    });
  }

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact).then((updatedContact: Contact) => {
      this.updateHandler(updatedContact);
    });
  }

  deleteContact(contactId: String): void {
    this.contactService.deleteContact(contactId).then((deletedContactId: String) => {
      this.deleteHandler(deletedContactId);
    });
  }
}