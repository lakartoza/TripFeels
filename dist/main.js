"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_1 = require("./app");
var http_1 = require("@angular/http");
var containers_1 = require("./app/containers");
var forms_2 = require("@angular/forms");
var ui_1 = require("./app/ui");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_1.App,
            containers_1.Main,
            ui_1.AppBar,
            ui_1.NoteCard,
            containers_1.Notes,
            ui_1.NoteCreator,
            ui_1.ColorPicker,
            containers_1.AddTrip,
            containers_1.Login,
            containers_1.Trips
        ],
        providers: app_1.providers,
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, app_1.routes, forms_2.ReactiveFormsModule],
        bootstrap: [app_1.App]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map