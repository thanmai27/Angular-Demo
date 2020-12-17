import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import {AuthService} from '../auth.service';
import { OAuthSettings } from './../outh';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show = false;
  images= ['../../assets/images/1.jpg',
'../../assets/images/2.jpg',
'../../assets/images/3.jpg',
'../../assets/images/4.jpg',
'../../assets/images/5.jpg',
'../../assets/images/6.jpg',
'../../assets/images/7.jpg'];

  backgroundImage: string = '';
  constructor(private authservice:AuthService,private msalService: MsalService) { }

  ngOnInit() {


    let ran = Math.round((Math.random() * 6) + 1)
    // Math.round((Math.random()*100)%5);
    console.log(ran)
    this.backgroundImage = this.images[ran];


  }

  Fn_Login(data)
  {
    const loggedUserInfo={user:data.username};
    if(data.username == '' )
    {
      alert("Please Enter UserID");
      return;
    }

    else
    {
      var s =JSON.stringify(data.username)
      sessionStorage.setItem('loggedUserinfo',JSON.stringify(loggedUserInfo));


     location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" + OAuthSettings.clientId+ "&response_type=code&redirect_uri=" + OAuthSettings.redirectUri+ "&response_mode=query&scope=https://graph.microsoft.com/" + OAuthSettings.scopes[0] + "&state=12345&login_hint=" + data.username;
    }


  }

}
