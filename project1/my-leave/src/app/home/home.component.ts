import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
