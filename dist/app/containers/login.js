"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Login = (function () {
    function Login() {
    }
    Login.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstname: ['', forms_1.Validators.required],
            lastname: ['', forms_1.Validators.required],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            })
        });
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login-container',
        styleUrls: ["app/containers/login.component.css"],
        templateUrl: 'app/containers/login.html'
    })
], Login);
exports.Login = Login;
//# sourceMappingURL=login.js.map