import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OAuthSettings } from './../outh';
let LoginComponent = class LoginComponent {
    constructor(authservice, msalService) {
        this.authservice = authservice;
        this.msalService = msalService;
        this.show = false;
        this.images = ['../../assets/images/1.jpg',
            '../../assets/images/2.jpg',
            '../../assets/images/3.jpg',
            '../../assets/images/4.jpg',
            '../../assets/images/5.jpg',
            '../../assets/images/6.jpg',
            '../../assets/images/7.jpg'];
        this.backgroundImage = '';
    }
    ngOnInit() {
        let ran = Math.round((Math.random() * 6) + 1);
        // Math.round((Math.random()*100)%5);
        console.log(ran);
        this.backgroundImage = this.images[ran];
    }
    Fn_Login(data) {
        const loggedUserInfo = { user: data.username };
        if (data.username == '') {
            alert("Please Enter UserID");
            return;
        }
        else {
            var s = JSON.stringify(data.username);
            sessionStorage.setItem('loggedUserinfo', JSON.stringify(loggedUserInfo));
            location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" + OAuthSettings.clientId + "&response_type=code&redirect_uri=" + OAuthSettings.redirectUri + "&response_mode=query&scope=https://graph.microsoft.com/" + OAuthSettings.scopes[0] + "&state=12345&login_hint=" + data.username;
        }
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map