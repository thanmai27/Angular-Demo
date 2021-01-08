import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
serverErrorMessages: string;
  constructor(public userService: UserService, private router: Router) { }

  model = {
    email : '',
    password : ''
  };
  // tslint:disable-next-line: typedef
  ngOnInit(){
    if (this.userService.isLoggedIn())
    {
      this.router.navigateByUrl('/home');
    }
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/');
      },
      err => {
        this.serverErrorMessages = err.error.message;
       }
    );
  }
}
