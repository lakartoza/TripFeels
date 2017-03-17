// import { Component, OnInit } from '@angular/core';
// import { Contact } from './contact';
// import { ContactService } from '../services/';
// import { ContactDetailsComponent } from './contact-details.component';

// @Component({
//   selector: 'contact-list',
//   template: `
//   <div class="row">
//   <div class="col-md-5">
//     <h2>Contacts</h2>
//     <ul class="list-group">
//       <li class="list-group-item"
//         *ngFor="let contact of contacts"
//         (click)="selectContact(contact)"
//         [class.active]="contact === selectedContact">
//         {{contact.name}}
//       </li>
//     </ul>
//     <button class="btn btn-warning" (click)="createNewContact()">New</button>
//   </div>
//   <div class="col-md-5 col-md-offset-2">
//     <contact-details
//       [contact]="selectedContact"
//       [createHandler]="addContact"
//       [updateHandler]="updateContact"
//       [deleteHandler]="deleteContact">
//     </contact-details>
//   </div>
// </div>
//   `,
//   // styleUrls: ['./contact-list.component.css'],
//   providers: [ContactService]
// })

// export class ContactListComponent implements OnInit {

//   contacts: Contact[]
//   selectedContact: Contact

//   constructor(private contactService: ContactService) { }

//   ngOnInit() {
//      this.contactService
//       .getContacts()
//       .then((contacts: Contact[]) => {
//         this.contacts = contacts.map((contact) => {
//           if (!contact.phone) {
//             contact.phone = {
//               mobile: '',
//               work: ''
//             }
//           }
//           return contact;
//         });
//       });
//   }

//   private getIndexOfContact = (contactId: String) => {
//     return this.contacts.findIndex((contact) => {
//       return contact._id === contactId;
//     });
//   }

//   selectContact(contact: Contact) {
//     this.selectedContact = contact
//   }

//   createNewContact() {
//     var contact: Contact = {
//       name: '',
//       email: '',
//       phone: {
//         work: '',
//         mobile: ''
//       }
//     };

//     // By default, a newly-created contact will have the selected state.
//     this.selectContact(contact);
//   }

//   deleteContact = (contactId: String) => {
//     var idx = this.getIndexOfContact(contactId);
//     if (idx !== -1) {
//       this.contacts.splice(idx, 1);
//       this.selectContact(null);
//     }
//     return this.contacts;
//   }

//   addContact = (contact: Contact) => {
//     this.contacts.push(contact);
//     this.selectContact(contact);
//     return this.contacts;
//   }

//   updateContact = (contact: Contact) => {
//     var idx = this.getIndexOfContact(contact._id);
//     if (idx !== -1) {
//       this.contacts[idx] = contact;
//       this.selectContact(contact);
//     }
//     return this.contacts;
//   }
// }