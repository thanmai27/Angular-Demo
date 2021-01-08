import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {LeaveService} from '../leave.service';
import {Leave} from '../model/leavae';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  router:Router;

  constructor(private leaveService:LeaveService,router:Router) 
  {
    this.router = router;
   }
  ngOnInit() {  this.refreshLeaves();
  }

  onSubmit(form: NgForm) {}

  refreshLeaves()
  {
    this.leaveService.getLeaveList().subscribe( (res) =>
    {
      this.leaveService.leaves = res as Leave[];
    })
 
  }

  
  logOut()
 {
   this.router.navigate(['/home']);

 }
}
