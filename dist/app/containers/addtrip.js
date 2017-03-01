"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddTrip = (function () {
    function AddTrip() {
    }
    return AddTrip;
}());
AddTrip = __decorate([
    core_1.Component({
        selector: 'addtrip-container',
        styleUrls: ["app/containers/addtrip.component.css"],
        template: "\n\n    <div class = \"container\">\n    \t<div clas =\"hex-container\">\n\t    \t<div id = \"trip-text\">\n\t\t\t\t <a [routerLink]=\"['', 'trips']\">\n\t\t\t\t \t<h1> Add New Trip </h1> <p>\n\t\t\t\t \t<i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n\t\t\t\t </a>\n\t\t\t</div>\n\t   \t\t<div class=\"hexagon\"></div>\n   \t\t</div>\n    \t<div class =\"hex-container\">\n\t    \t<div id = \"trip-text-2\">\n\t\t\t\t \t<h2> RECENT TRIP #1 </h2> <p>\n\n\t\t\t</div>\n\t\t\t\n\t   \t\t<div class=\"hexagon\"></div>\n   \t\t</div>\n\n\t</div>\n    \t\n    \n    "
    })
], AddTrip);
exports.AddTrip = AddTrip;
//# sourceMappingURL=addtrip.js.map