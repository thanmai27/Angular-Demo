import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//simport 'rxjs/add/operator/toPromise';

import {Leave} from './model/leavae';
import {Employee} from './model/employee';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  selectedLeave:Leave = new Leave();
  leaves:Leave[];

  selectedEmployee:Employee;
  employees:Employee[];
  readonly baseURL='http://localhost:5678/leaves';
  readonly baseURL2="http://localhost:5678/employees";
  readonly baseURL3="http://localhost:5678/supervisors";

  current_user:any;
  

  constructor(private http:HttpClient) { }

  isAdmin:boolean = false;
  isEmployee:boolean= false;

//applying for leave
  postLeave(lev:Leave)
  {
    return this.http.post(this.baseURL,lev);
  }

  //get applied leave list
  getLeaveList()
  {
    return this.http.get(this.baseURL);
  }

  //delete leave
  deleteLeave(_id:string)
  {
    return this.http.delete(this.baseURL+`/${_id}`)
  }

//login for employee 
  getList()
  {
    console.log("welcome");
   return this.http.get(this.baseURL2);
  }

  
//login for Admin
  getAdminList()
  {
    console.log("welcome");
    return this.http.get(this.baseURL3);
  }

  //update status as approved
  approveLeave(lev)
  {
    return this.http.put(this.baseURL+`/${lev}`,lev);
  }


  rejectLeave(lev)
  {
    return this.http.put(this.baseURL+`/reject`+`/${lev}`,lev);

  }

  //Admin message 
  sendMessage(lev)
  {
    return this.http.put(this.baseURL+`/message`+`/${lev}`,lev);

  }
}
