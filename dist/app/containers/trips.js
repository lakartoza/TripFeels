"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Trips = (function () {
    function Trips() {
    }
    return Trips;
}());
Trips = __decorate([
    core_1.Component({
        selector: 'trips-container',
        styleUrls: ["app/containers/trips.component.css"],
        template: "\n\n    <div class = \"container\">\n        <h4> ADD NEW TRIP </h4> <p>\n        <div class=\"section group\">\n\t\t\t<div class=\"col span_1_of_2\">\n\t\t\t\t<div class = \"tiny-hex\" ></div> \n\t\t\t</div>\n\t\t\t<div class=\"col span_1_of_2\">\n\t\t\t<input type=\"text\" id=\"trip-name\" name=\"trip-name\" required placeholder=\"TRIP NAME\"> <p>\n\t\t\t</div>\n\t\t</div>\n\t    <h4> ADD FRIENDS </h4> <p>\n        <div class=\"section group\">\n\t\t\t<div class=\"col span_1_of_2\">\n\t\t\t\t<div class = \"tiny-hex\" >\n\t\t\t\t \t\t<div class = \"plus\"  >\n\t\t\t\t\t\t\t<i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div> \n\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col span_1_of_2\">\n\t\t\t\t\n\t\t\t\t\t\t<input  type=\"email\" id=\"email\" name=\"email\" required placeholder=\" ADD E-MAIL \"> \n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id = \"instruct\">\n\t        Invite other users to collaborate on your trip planning. Once you begin your B-storm, your selected users will receive an email invite.\n        </div>\n        <a [routerLink]=\"['', 'notes']\">\n\t        <input type=\"submit\" class = \"button-login\" value = \"START B-STORMING\">\n        </a>\n    </div> \n    \n    "
    })
], Trips);
exports.Trips = Trips;
//# sourceMappingURL=trips.js.map