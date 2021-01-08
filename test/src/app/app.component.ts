import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'test';


  constructor(private userservice:UsersService,private route:ActivatedRoute) 
  {
    
    
  }

  ngOnInit()
  {
  }

}

