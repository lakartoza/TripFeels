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
var ColorPicker = (function () {
    function ColorPicker() {
        this.colors = [];
        this.selected = new core_1.EventEmitter();
        this.isSelectorVisible = false;
    }
    ColorPicker.prototype.showSelector = function (value) {
        this.isSelectorVisible = value;
    };
    ColorPicker.prototype.selectColor = function (color) {
        this.showSelector(false);
        this.selected.next(color);
    };
    return ColorPicker;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ColorPicker.prototype, "colors", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ColorPicker.prototype, "selected", void 0);
ColorPicker = __decorate([
    core_1.Component({
        selector: 'color-picker',
        styles: ["\n    .color-selector {\n      position: relative;\n    }\n\n    .selector {\n    min-width: 120px;\n    padding: 10px;\n    position: absolute;\n    bottom: -37px;\n    display: -webkit-box;\n    }\n\n    .color {\n      height: 50px;\n      width: 50px;\n      border-radius: 100%;\n      cursor: pointer;\n      margin-right: 10px;\n      margin-bottom: 10px;\n    }\n    .color:hover {\n      border: 2px solid darkgrey;\n    }\n    .icon {\n      font-size: 40px;\n      color: white;\n      cursor: pointer;\n      float:right;\n      text-shadow: 2px 2px #b9b3b3;\n\n    }\n\n    #wrapper .text {\n      position:relative;\n      bottom:30px;\n      left:0px;\n      visibility:hidden;\n    }\n\n    #wrapper:hover .text {\n      visibility:visible;\n    }\n\n  "],
        template: "\n\n    <div class=\"color-selector\">\n      <i (click)=\"showSelector(true)\" class=\"material-icons icon\">color_lens</i>\n      <div class=\"selector row center-xs\" *ngIf=\"isSelectorVisible\">\n        <div\n          class=\"color\"\n          *ngFor=\"let color of colors\"\n          [ngStyle]=\"{'background-color': color}\"\n          (click)=\"selectColor(color)\"\n        >\n        </div>\n      </div>\n    </div>\n  "
    })
], ColorPicker);
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=color-picker.js.map