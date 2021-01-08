import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService , private router: Router) { }

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
