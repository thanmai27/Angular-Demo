import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import * as $ from 'jquery';


import {LeaveService} from '../leave.service';
import {Leave} from '../model/leavae';
import { NgForm } from '@angular/forms';
import { StatusService } from '../status.service';
@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {
  router:Router;

  constructor(private leaveService:LeaveService,private statusService:StatusService,router:Router) 
  {
    this.router = router;
   }

  ngOnInit() { this.refreshLeaves();
    this.resetForm();
  }
  onSubmit(form: NgForm) {
 
  }


  refreshLeaves()
  {
    this.leaveService.getLeaveList().subscribe( (res) =>
    {
      this.leaveService.leaves = res as Leave[];
    })
 
  }

  resetForm(form?:NgForm)
  {
    if(form)
    
      form.reset();
  }

 /* onDelete(_id: string, form: NgForm) 
  {
    if (confirm('Are you sure to Reject the Leave ?') == true) {
      this.leaveService.deleteLeave(_id).subscribe((res) => {
        this.refreshLeaves();
        this.resetForm(form);
       alert('rejected successfully ') ;
      } );
    }
  }
*/
    fn_onApprove(lev)
    {


      console.log("reach approve");
      this.leaveService.approveLeave(lev).subscribe((res) => {
       // confirm('Are you sure to Approve the Leave' )  ; 
    
        this.refreshLeaves();

    });
   
  }

  onReject(lev)
  {
    console.log("reach reject");
    this.leaveService.rejectLeave(lev).subscribe((res) => {
      confirm('Are you sure to Reject the Leave' )  ; 
      this.refreshLeaves();

  });
 
}

message(lev)
{
 this.leaveService.sendMessage(lev).subscribe( (res) =>
 {
  this.refreshLeaves();

 })
  
}


  logOut()
 {
   this.router.navigate(['/home']);

 }

 Test()
  {
    $(document).ready(function(){
      $("i").click(function(){
        $(".col-md-3").toggle();
      });
    });
   
  }

}

