"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var NoteCreator = (function () {
    function NoteCreator() {
        this.createNote = new core_1.EventEmitter();
        this.colors = ['#FFA657', '#FFE457', '#C40000', '#36929B', '#F49AC2', '#F4758C'];
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
        this.fullForm = false;
    }
    NoteCreator.prototype.onCreateNote = function () {
        var _a = this.newNote, title = _a.title, value = _a.value, color = _a.color;
        if (title && value) {
            this.createNote.next({ title: title, value: value, color: color });
        }
        this.reset();
        this.fullForm = false;
    };
    NoteCreator.prototype.reset = function () {
        this.newNote = {
            title: 'something',
            value: '',
            color: 'white'
        };
    };
    NoteCreator.prototype.toggle = function (value) {
        this.fullForm = value;
    };
    NoteCreator.prototype.onColorSelect = function (color) {
        this.newNote.color = color;
    };
    return NoteCreator;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteCreator.prototype, "createNote", void 0);
NoteCreator = __decorate([
    core_1.Component({
        selector: 'note-creator',
        styles: ["\n\n    h1{\n      color: #ffc957;\n      display:flex;\n      justify-content:center;\n      align-items:center;\n      text-align: center;\n\n    }\n    .note-creator {\n      padding: 32px;\n      background-color: white;\n      border-radius: 0px;\n      margin-bottom: 30px;\n      width: 39%;\n      margin: auto;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    .title {\n      font-weight: bold;\n      color: rgba(0,0,0,0.8);\n    }\n    .full {\n      height: 100px;\n    }\n\n    input\n    {\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      margin: 10px 50px;\n      padding: 20px;\n      color: #ffc957;\n      border-style: none;\n      display: inline-block;\n      width: 50px;\n      height: 34px;\n      text-transform: uppercase;\n    }\n\n    .btn-light {\n      margin-top: 20px;\n      background-color: #ffc957;\n      color: white;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      display: block;\n      font-style: bold;\n      border-style: none;\n    }\n  "],
        template: "\n    <h1> Add an idea + color! </h1>\n    <div class=\"col-xs-12 col-lg-12\">\n\n\n        <div class=\"note-creator shadow-2\" [ngStyle]=\"{'background-color': newNote.color}\">\n          <form class=\"row\" (ngSubmit)=\"onCreateNote()\">\n            <input\n              type=\"text\"\n              (focus)=\"toggle(true)\"\n              [(ngModel)]=\"newNote.value\"\n              name=\"newNoteValue\"\n              placeholder=\"ACTIVITY\"\n              class=\"col-xs-10\"\n            >\n            <div class=\"actions col-xs-12 row between-xs\" *ngIf=\"fullForm\">\n              <div class=\"col-xs-3\">\n                <color-picker\n                  (selected)=\"onColorSelect($event)\"\n                  [colors]=\"colors\"\n                >\n                </color-picker>\n              </div>\n              <button\n                type=\"submit\"\n                class=\"btn-light\"\n               >\n                Done\n              </button>\n            </div>\n          </form>\n        </div>\n\n    </div>\n  "
    })
], NoteCreator);
exports.NoteCreator = NoteCreator;
//# sourceMappingURL=note-creator.js.map