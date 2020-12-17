import { Injectable } from '@angular/core';
import {BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';

import { OAuthSettings } from '../app/outh';
import {Router} from '@angular/router'

import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 clientname:string;
 isUser=false;
 loggedIn = false;

  constructor(private broadcastService: BroadcastService,private authService: MsalService, private router: Router) { }
  ngOnInit() {

    console.log(sessionStorage.getItem('loggedUserinfo'));
    var loggedUserdetails=JSON.parse(sessionStorage.getItem('loggedUserinfo'));
    console.log(loggedUserdetails);
    this.clientname=loggedUserdetails.user;

    this.checkoutAccount();

    this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkoutAccount();
    });

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }

      console.log('Redirect Success: ', response.accessToken);
    });

    this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }
  LogIn()
  {

    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Chrome') > -1;

    if (isIE)
    {


      this.authService.loginRedirect( OAuthSettings);

      this.authService.acquireTokenRedirect(OAuthSettings)

    } else
    {
      this.authService.loginPopup();
    //  this.isUser = true;

    }
  }

  fn_LogOut()
  {
    localStorage.clear();
    sessionStorage.clear();
    this.authService.logout();


  }
}
