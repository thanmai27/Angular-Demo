import { Injectable } from '@angular/core';

import { User, Contact , Project } from './user.module';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName : '',
    email : '',
    phone : '',
    password : ''
  };

  selectedContact: Contact = {
    name : '',
    phone : '',
    email : '',
    location : ''
  };

  selectedProject: Project = {
    units : '',
    area : '',
    projectname : '',
    location : '',
    floor : ''
  };

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  constructor(private http: HttpClient) { }

  // HTTP METHODS

  // postuploadmultiple(floor: Floor){
  //   return this.http.post(environment.apiBaseUrl + '/uploadmultiple' , floor)
  // }

  // tslint:disable-next-line: typedef
  postContact(contact: Contact) {
    return this.http.post(environment.apiBaseUrl + '/contactus', contact);
  }

  // tslint:disable-next-line: typedef
  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);
  }

  // tslint:disable-next-line: typedef
  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/authenticate' , authCredentials , this.noAuthHeader);
  }

  // tslint:disable-next-line: typedef
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  // tslint:disable-next-line: typedef
  postProject(project: Project){
    return this.http.post(environment.apiBaseUrl + '/project', project);
  }


// HELPER METHODS

  // tslint:disable-next-line: typedef
  setToken(token: string){
    localStorage.setItem('token', token);
  }


  // tslint:disable-next-line: typedef
  getToken() {
    return localStorage.getItem('token');
  }


  // tslint:disable-next-line: typedef
  deleteToken() {
    localStorage.removeItem('token');
  }


  // tslint:disable-next-line: typedef
  getUserPayload(){
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
     }
     else { return null; }
  }

  // tslint:disable-next-line: typedef
  isLoggedIn(){
    const userPayload = this.getUserPayload();
    if (userPayload)
    {
      return userPayload.exp > Date.now() / 1000;
    }
    else
    { return false; }
  }
}
