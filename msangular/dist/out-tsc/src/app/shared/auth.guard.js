import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (sessionStorage.getItem('loggedUserinfo')) {
            // logged in so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url and return false
            this.router.navigateByUrl('/');
        }
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map