import { Component, Input, Output, EventEmitter } from '@angular/core';





@Component({
  selector: 'note-card',
  styles: [`
  
* {
    
    padding: 0;
}
body {
    /*background: rgb(123, 158, 158);*/
}

.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}

.hexGrid {
  display: inline-table;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  list-style-type: none;
}

.hexIn{
  position: absolute;
  width:96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin:0 2%;
  overflow: hidden;
  visibility: hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transform: rotate3d(0,0,1,-60deg) skewY(30deg);
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
            transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}




/*** HOVER EFFECT  **********************************************************************/
/*.hexLink:hover h1, .hexLink:focus h1,
.hexLink:hover p, .hexLink:focus p{
  -webkit-transform:translate3d(0,0,0);
      -ms-transform:translate3d(0,0,0);
          transform:translate3d(0,0,0);
}
*/
/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width:1201px) { /* <- 5-4  hexagons per row */
  .hexGrid{
    padding-bottom: 4.4%
  }
  .hex {
    width: 20%; /* = 100 / 5 */
  }
  .hex:nth-child(9n+6){ /* first hexagon of even rows */
    margin-left:10%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */
  .hexGrid{
    padding-bottom: 5.5%
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n+5){ /* first hexagon of even rows */
    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
  .hexGrid{
    padding-bottom: 7.4%
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) { /* <- 2-1  hexagons per row */
  .hexGrid{
    padding-bottom: 11.2%
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n+3){ /* first hexagon of even rows */
    margin-left:25%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
    .hexGrid {
        font-size: 13px;
    }
}


.icon {
  z-index: 100; 
  position: absolute;
  visibility: visible;
}

.bs-hex-image {
  width: 249px;
  position: relative;
  padding-left: 14px;
}

.bs-hex-text {
    position: relative;
    top: -175px;
    margin: auto;
    text-align: left;
    color: white;
    letter-spacing: 2px;
    width: 0%;
    padding-left: 20px;
    text-transform: uppercase;
}

.h2 {
  width: 100%;
}

.container {
  width: 34%;
}

.fa-sort-asc {
      left: 150px;
    top: -75px;
    /* font-size: 14px; */
    position: relative;

}

.fa-sort-desc{
    left: 150px;
    position: relative;
    top: -79px;

}

.vote-arrows {
    position: relative;
    top: -9px;
    text-align: center;

}

#vote-num {
    font-size: 39px;
    left: 150px;
    bottom: 74px;
    position: relative;
}

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

     .bs-hex-image {
      width: 249px;
      position: relative;
      padding-left: 14px;
    }

    .bs-hex-text {
        position: relative;
        top: -175px;
        margin: auto;
        text-align: left;
        color: white;
        letter-spacing: 2px;
        width: 0%;
        padding-left: 20px;
        text-transform: uppercase;
    }

}

/* Portrait */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

    .bs-hex-image {
      width: 249px;
      position: relative;
      padding-left: 14px;
    }

    .bs-hex-text {
        position: relative;
        top: -175px;
        margin: auto;
        text-align: left;
        color: white;
        letter-spacing: 2px;
        width: 0%;
        padding-left: 20px;
        text-transform: uppercase;
    }

    .h2 {
        width: 100%;
    }

      .container {
        width: 34%;
      }

      .fa-sort-asc {
            left: 150px;
          top: -75px;
          /* font-size: 14px; */
          position: relative;

      }

      .fa-sort-desc{
          left: 150px;
          position: relative;
          top: -79px;

      }

      .vote-arrows {
          position: relative;
          top: -9px;
          text-align: center;

      }

      #vote-num {
          font-size: 39px;
          left: 150px;
          bottom: 74px;
          position: relative;
      }

      .flex-container {
        padding: 0;
        margin: 0;
        list-style: none;
        
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        
        -webkit-flex-flow: row wrap;
        justify-content: space-around;
      }

}

/* Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

    .bs-hex-image {
      width: 249px;
      position: relative;
      padding-left: 29px;
    }

    .bs-hex-text {
        position: relative;
        top: -175px;
        margin: auto;
        text-align: left;
        color: white;
        letter-spacing: 2px;
        width: 0%;
        padding-left: 20px;
        text-transform: uppercase;
    }

    .h2 {
      width: 100%;
    }

    .container {
      width: 34%;
    }

    .fa-sort-asc {
          left: 150px;
        top: -75px;
        /* font-size: 14px; */
        position: relative;

    }

    .fa-sort-desc{
        left: 150px;
        position: relative;
        top: -79px;

    }

    .vote-arrows {
        position: relative;
        top: -9px;
        text-align: center;

    }

    #vote-num {
        font-size: 39px;
        left: 150px;
        bottom: 74px;
        position: relative;
    }

    .flex-container {
      padding: 0;
      margin: 0;
      list-style: none;
      
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      
      -webkit-flex-flow: row wrap;
      justify-content: space-around;
    }

}








`],
  template: `
  <div class = "flex-container">
    <div class = "hexGrid flex-item">
      <div
        [ngStyle]="{'background-color': 'white'}"
        (mouseenter)="toggleCheck()"
        (mouseleave)="toggleCheck()"
        >
          <div class="icon" *ngIf="showCheck" (click)="onChecked()">
            <i class="fa fa-times fa-3x" aria-hidden="true" style="color: #ffc957"></i>
          </div>

       
            <div class="hex " href="#">
              <img class="bs-hex-image" src="/public/images/{{ note.title }}.png" alt="" />
          

                <h2 class="bs-hex-text value">{{ note.value }}</h2>
                <div class = "bs-hex-text">
                  <div class = "vote-arrows">
                    <div id = "fa-sort-asc" (click)="upVote()">
                      <i class="fa fa-sort-asc fa-3x" aria-hidden="true"></i> 
                    </div>  

                    <div id = "vote-num">
                      {{myVote + voteCount}}
                    </div> 

                    <div id = "fa-sort-desc" (click) ="downVote()">
                      <i class="fa fa-sort-desc fa-3x" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

              
            </div>
         
       </div>
      </div>
    </div>
  `
})
export class NoteCard {
  @Input() note = {};
  @Input() voteCount = 0;
  @Input() myVote = 0;
  @Output() checked = new EventEmitter();
  @Output('vote') change = new EventEmitter();



  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  };

  onChecked() {
    this.checked.next(this.note);
  };

 
  upVote() {
      if (this.myVote == 1) {
        this.myVote++;
          return;
      };

      this.myVote++;
      this.emitEvent();
  };

  downVote() {
      if (this.myVote == 0) {
          this.myVote--;
          return;
      };

      this.myVote--;
      this.emitEvent();
  };

  emitEvent() {
      this.change.emit({myVote: this.myVote});
  };

}



