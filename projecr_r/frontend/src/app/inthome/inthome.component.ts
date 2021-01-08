import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';



@Component({
  selector: 'app-inthome',
  templateUrl: './inthome.component.html',
  styleUrls: ['./inthome.component.css']
})
export class InthomeComponent implements OnInit {
  value = 'Clear me';
  termsFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // emailRegex1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // backgroundColorToggle.value = "primary";
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public userService: UserService , private  router: Router) { }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {
    // alert('reaching');
    this.userService.postContact(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
       },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      }
    );
  }


  // tslint:disable-next-line: typedef
  resetForm(form: NgForm){
    this.userService.selectedContact = {
      name : '',
      phone : '',
      email : '',
      location : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
