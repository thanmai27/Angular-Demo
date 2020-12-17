import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Contact} from './contact.model';
 
@Injectable({
  providedIn: 'root'
})
export class ContactService {
selectedConatct:Contact;

   constructor(private http:HttpClient) { }


  readonly baseURL = "http://localhost:3000/contact";

  postContact(contact:Contact)
  {
     return this.http.post(this.baseURL,contact)   
  }
}
