import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


import{Supervisor} from '../model/supervisor';
import {LeaveService} from '../leave.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  spr:Supervisor = new Supervisor();
  router:Router;
  alert: boolean=false;

  constructor(private leaveService:LeaveService,router:Router) {this.router = router }

  ngOnInit() {
  }
  Onsubmit(data)
  {
  console.log(JSON.stringify(data));
  
this.leaveService.getAdminList().subscribe( (res) =>
{
var c :any = res;

  for(let i=0;i< c.length;i++)
  {

    if(data.user== res[i].sp_Name && data.pass==  res[i].sp_password )
    {

      this.spr.sp_Name= res[i].empName;
      this.spr.sp_password= res[i].password;

      this.leaveService.isAdmin = true;
      
     this.router.navigate(['/view']);


    }
    else{
      alert("wrong credentials")
    }
   

  }

})

 }
}

