import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    {id:1,name:'thanmai'},
    {id:2,name:'teena'},
    {id:3,name:'thanu'}]
  constructor() { }

  getUser(id:number)
  {
    const user = this.users.find( (s)=>
    {
      s.id === id
    })
    return user;
  }


}
