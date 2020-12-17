import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import {AuthService} from '../auth.service'

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile;


  constructor( private msal:MsalService,private http:HttpClient,private authservice:AuthService) { }

  ngOnInit() {


  }


Logout()
{

  this.authservice.fn_LogOut();


}

}
