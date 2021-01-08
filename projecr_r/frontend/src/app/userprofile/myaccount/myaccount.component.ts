import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  userDetails;
  constructor(public userService: UserService , private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.userService.getUserProfile().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/signin']);
  }


}
