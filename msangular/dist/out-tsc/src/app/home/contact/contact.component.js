import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor(toastr, contactService) {
        this.toastr = toastr;
        this.contactService = contactService;
        this.show = false;
        this.user = {
            message: '',
            fileContent: ''
        };
    }
    ngOnInit() {
    }
    Fn_Clear(form) {
        if (form) {
            form.reset();
        }
    }
    fn_changeMandatory() {
        this.show = !this.show;
    }
    Fn_Submit(form) {
        this.contactService.selectedConatct = form.value;
        this.contactService.postContact(form.value).subscribe((data) => {
            this.Fn_Clear(form);
            console.log(data);
            this.toastr.success("Data Added Successguuly", "Your Request has sent !!!", {
                timeOut: 2000,
                progressAnimation: 'increasing',
            });
        });
    }
};
ContactComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css'],
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map