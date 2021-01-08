import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User} from '../model/usermanagement.model'

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService
{
  selectedUser:User;
  users: User[];


   constructor(private http:HttpClient) { }
   readonly baseURL = "http://localhost:3000/user";

   postUser(user:User)
   {
      return this.http.post(this.baseURL,user)
   }
   putUser(user: User) {
    return this.http.put(this.baseURL + `/${user._id}`, user);
  }
   getUserList()
  {
    return this.http.get(this.baseURL);
  }
  userDisable(userId:any) {
  console.log("serviceID",userId)
    return this.http.put(this.baseURL+`/enable`+`/${userId}`,userId);
  }
  userEnable(userId:any) {
    console.log("serviceID",userId)
      return this.http.put(this.baseURL+`/disable`+`/${userId}`,userId);
    }

    getTeamLeadList()
    {
      return this.http.get(this.baseURL+`/teamlead`);

    }

    getTeamMemberList()
    {
      return this.http.get(this.baseURL+`/member`);

    }
}
