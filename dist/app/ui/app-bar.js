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
var common_1 = require("@angular/common");
var AppBar = (function () {
    function AppBar(_location) {
        this._location = _location;
    }
    AppBar.prototype.backClicked = function () {
        this._location.back();
    };
    return AppBar;
}());
AppBar = __decorate([
    core_1.Component({
        selector: 'app-bar',
        styles: ["\n\n    h1, h2, h3{\n      color: #ffc957;\n      display:flex;\n      justify-content:center;\n      align-items:center;\n      text-align: center;\n      color: #ffc957;\n\n\n    }\n    .app-bar {\n      height: 65px;\n      padding: 5px 30px;\n      font-weight: bold;\n    }\n    .logo {\n      color: #ffc957;\n      font-size: 30px;\n      font-weight: 300;\n      cursor: pointer;\n      left: 20px;\n    }\n    .link {\n      color: #ffc957;\n      font-size: 24px;\n      font-weight: 400;\n      cursor: pointer;\n      display: inline-block;\n      margin: 20px;\n    }\n    .fa-2x {\n      position: fixed; \n    }\n\n    #help {\n      margin: 20px;\n    }\n\n    #home {\n      margin: 20px;\n    }\n    \n    .row, .middle-xs, .between-xs{\n      padding: 0px;\n    }\n    \n\n\n  "],
        template: "\n    <header class=\"app-bar row middle-xs\">\n      <span [routerLink]=\"[Main]\" class=\"logo col-xs-10\">\n        B-STORM\n      </span>\n      <nav class=\"col-xs-2\">\n\n        <div id = \"links\">\n\n            <div id = \"home\">\n               <div class=\"row middle-xs between-xs\">\n                <span [routerLink]=\"['', '']\" class=\"link\">\n                    <i class=\"fa fa-long-arrow-left fa-2x\" aria-hidden=\"true\"></i>     \n                </span>\n                <span [routerLink]=\"['', '']\" class=\"link\">\n                    <i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i>\n                </span>\n\n\n              </div>\n\n            \n          </div>\n        </div> \n      </nav>\n    </header>\n   \n  "
    }),
    __metadata("design:paramtypes", [common_1.Location])
], AppBar);
exports.AppBar = AppBar;
//# sourceMappingURL=app-bar.js.map