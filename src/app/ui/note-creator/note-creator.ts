import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
  styleUrls: [`app/ui/note-creator/note-creator.css`],
  templateUrl : 'app/ui/note-creator/note-creator.html'
 
})
export class NoteCreator {
 
 @Output() createNote = new EventEmitter();
  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  
  // Data of all images
  // private hex1= {
  //   photo: '1.png'
  // };
  // private hex2 = {
  //   photo: '2.png'
  // };
  // private hex3= {
  //   photo: '3.png'
  // };
  // private hex4 = {
  //   photo: '4.png'
  // };
  // private hex5= {
  //   photo: '5.png'
  // };
  // private hex6 = {
  //   photo: '.png'
  // };

  // private activity1 = this.hex1;
  // private activity2 = this.hex2;
  // private activity3 = this.hex3;
  // private activity4 = this.hex4;
  // private activity5 = this.hex5;
  // private activity6 = this.hex6;



  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  fullForm: boolean = false;

  onCreateNote() {
    const { title, value, color } = this.newNote;

    if (title && value) {
      // var colorChoice = []; 
      // if (this.images[0] && this.colors[0]) {

      this.createNote.next({ title, value, color});

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
