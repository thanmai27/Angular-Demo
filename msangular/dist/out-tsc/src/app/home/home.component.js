import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
let HomeComponent = class HomeComponent {
    constructor(msal, http, authservice) {
        this.msal = msal;
        this.http = http;
        this.authservice = authservice;
    }
    ngOnInit() {
    }
    Logout() {
        this.authservice.fn_LogOut();
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map