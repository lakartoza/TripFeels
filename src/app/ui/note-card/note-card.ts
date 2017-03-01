import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'note-card',
  styleUrls: [`/app/ui/note-card/note-card-hex.css`, `/app/ui/note-card/note-card`],
  template: `
    <div
      [ngStyle]="{'background-color': note.color}"
      (mouseenter)="toggleCheck()"
      (mouseleave)="toggleCheck()"
      >
        <div class="icon" *ngIf="showCheck" (click)="onChecked()">
            <i class="material-icons">check</i>
        </div>
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://static.vecteezy.com/system/resources/previews/000/093/696/original/vector-yellow-abstract-background.jpg" alt="" />
            <div class="title">{{ note.title }}</div>
            <div class="value">{{ note.value }}</div>
          </a>
        </div>
      </div>
  `
})
export class NoteCard {
  @Input() note = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.note);
  }
}
