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
var services_1 = require("../../services");
var Notes = (function () {
    function Notes(noteService) {
        var _this = this;
        this.noteService = noteService;
        this.notes = [];
        this.noteService.getNotes()
            .subscribe(function (resp) { return _this.notes = resp.data; });
    }
    Notes.prototype.onCreateNote = function (note) {
        var _this = this;
        this.noteService.createNote(note)
            .subscribe(function (note) { return _this.notes.push(note); });
    };
    Notes.prototype.onNoteChecked = function (note) {
        var _this = this;
        this.noteService.completeNote(note)
            .subscribe(function (note) {
            var i = _this.notes.findIndex(function (localNote) { return localNote.id
                === note.id; });
            _this.notes.splice(i, 1);
        });
    };
    return Notes;
}());
Notes = __decorate([
    core_1.Component({
        selector: 'notes-container',
        styleUrls: ["app/containers/notes/notes.css"],
        template: "\n  <div class=\"notes\">\n    <div class=\"creator\">\n    <note-creator (createNote)=\"onCreateNote($event)\"></note-creator>\n    </div>\n    <div class=\"notes\">\n    <ul class=\"\" id=\"hexGrid\">\n        <note-card\n            class=\"hex\"\n            [note]=\"note\"\n            *ngFor=\"let note of notes\"\n            (checked)=\"onNoteChecked($event)\"\n            >\n        </note-card>\n    </ul>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [services_1.NoteService])
], Notes);
exports.Notes = Notes;
//# sourceMappingURL=notes.js.map