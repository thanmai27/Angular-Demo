import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
declare var FB: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  toggle = true;
  user = new User();
  constructor() { }

  ngOnInit(): void {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '167847368073605',
        cookie     : true,
        xfbml      : true,
        version    : 'v9.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js:any, fjs:any = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  
  fbLogin()
  {
    console.log("submit login to facebook");
    this.toggle = !this.toggle
    // FB.login();
    FB.login((response:any)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
          
           

            FB.api("/"+response.authResponse.userID+'?fields=name,email,first_name,last_name',
               (response2:any) => {
                if (response2 && !response2.error) {
                  /* handle the result */
                  console.log(response2.name)
                  console.log(response2.email)
                  console.log(response2.first_name)
                  console.log(response2.last_name)
                  // this.user.name = response2.name;
                  // this.user.email = response2.email;
                  // this.user.firstName= response2.first_name;
                  // this.user.lastName=response2.last_name

                }
              }
          );
           }
           else
           {
           console.log('User login failed');
         }
      },{ scope: "public_profile,email" });
  }

fbLogout()
{
  this.toggle = !this.toggle

  FB.logout();

}
  

}
