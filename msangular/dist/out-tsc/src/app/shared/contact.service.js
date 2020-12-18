import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000/contact";
    }
    postContact(contact) {
        return this.http.post(this.baseURL, contact);
    }
};
ContactService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map