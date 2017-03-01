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
var api_1 = require("./api");
require("rxjs/Rx");
var NoteService = (function () {
    function NoteService(apiService) {
        this.apiService = apiService;
        this.path = '/notes';
    }
    NoteService.prototype.createNote = function (note) {
        return this.apiService.post(this.path, note);
    };
    NoteService.prototype.getNotes = function () {
        return this.apiService.get(this.path);
    };
    NoteService.prototype.completeNote = function (note) {
        return this.apiService.delete(this.
            path + "/" + note.id);
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [api_1.ApiService])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=notes.js.map