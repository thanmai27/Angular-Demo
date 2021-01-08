import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { LeaveService} from '../leave.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emp:Employee = new Employee();
  router:Router;
  
  constructor(private leaveService:LeaveService,router:Router) {this.router = router }

  ngOnInit() {
  }
  Onsubmit(data)
  {

  console.log(JSON.stringify(data));
this.leaveService.getList().subscribe( (res) =>
{
var c:any= res;
for(let i=0;i< c.length;i++)
{

  if(data.user== res[i].empName && data.pass==  res[i].passWord )
  {
    this.emp.empName= res[i].empName;
    this.emp.passWord = res[i].password;
    this.emp.empId =res[i].empId;


  //  const loggedUserInfo={name:data.user,empId:data.id};
  const loggedUserInfo={name:this.emp.empName,empId:this.emp.empId };
    sessionStorage.setItem('loggedUserinfo',JSON.stringify(loggedUserInfo));
//this.leaveService.current_user = res[i];
//this.leaveService.selectedLeave.empName =  this.leaveService.current_user.empName;
//this.leaveService.selectedLeave.empId =  this.leaveService.current_user.empId;
this.leaveService.isAdmin = true;
    this.router.navigate(['/leave']);


  }

}





})

 }
}