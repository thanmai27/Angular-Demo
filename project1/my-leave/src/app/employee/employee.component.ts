import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';




import {LeaveService} from '../leave.service';
import { NgForm } from '@angular/forms';
import { Leave } from '../model/leavae';
import { addListener } from 'process';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[LeaveService]
})
export class EmployeeComponent implements OnInit {
router:Router;
userName;
empId ;
lev:Leave;

  constructor(private leaveService:LeaveService,router:Router) 
  {
    this.router = router ;
  }

  ngOnInit() {this.resetForm();

    console.log(sessionStorage.getItem('loggedUserinfo'));
    var loggedUserdetails=JSON.parse(sessionStorage.getItem('loggedUserinfo'));
    console.log(loggedUserdetails);
    this.userName=loggedUserdetails.name;
    this.empId = loggedUserdetails.empId;
  }

  resetForm(form?:NgForm)
  {
    if(form)
    
    form.reset();

    this.leaveService.selectedLeave={
      _id:"",
      empName:"",
      empId:null,
      reasonLeave:"",
      leaveFrom:null,
      leaveTo:null,
      description:"",
      status:"",
      message:""

    }      

  }

  onSubmit(form:NgForm)
  {
    this.leaveService.getLeaveList().subscribe( (res) =>
    {
      var c =Object.keys(res);
      console.log(res[parseInt(c[0])]);
    
    var userValidate=[];
    var post= true;
    for(var u=0;u<c.length;u++){
      userValidate.push(res[parseInt(c[u])])
    }
    
    console.log(userValidate);
     console.log(c);
      console.log(userValidate.length);
      
      for(let i=0;i<userValidate.length;i++)
      {
      console.log(userValidate[i]);


        if( userValidate[i].empName== this.userName && new Date(this.leaveService.selectedLeave.leaveFrom ).toLocaleDateString()==  new Date(userValidate[i].leaveFrom).toLocaleDateString())
        {
          post =false;

          alert("Date already exist the status is alred approved");   

          console.log("Date already exist");
          return ;

        }
        

      } 
    this.leaveService.postLeave(form.value).subscribe( (res) =>{ 
      alert("data added successfully");
      this.resetForm()});

      


    });
  }

  home()
  {
    this.userName=null;
    this.empId=null;
    this.router.navigate(['/home'])
   
  }
}
