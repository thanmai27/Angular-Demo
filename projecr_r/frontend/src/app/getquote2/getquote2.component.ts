import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getquote2',
  templateUrl: './getquote2.component.html',
  styleUrls: ['./getquote2.component.css']
})
export class Getquote2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// 

quantity:number=0;
i=1;
plus(){
  if(this.i != 5){
    this.i++;
    this.quantity= this.i;
  }
}
minus(){
  if(this.i !=0){
    this.i--;
    this.quantity= this.i;
  }
}
quantity1:number=0;
j=1;
plus1(){
  if(this.i !=5){
    this.i++;
    this.quantity1= this.i;
  }
}
minus1(){
  if(this.i !=0){
    this.i--;
    this.quantity1= this.i;
  }
}
quantity2:number=0;
m=1;
plus2(){
  if(this.i !=5){
    this.i++;
    this.quantity2= this.i;
  }
}
minus2(){
  if(this.i !=0){
    this.i--;
    this.quantity2= this.i;
  }
}
quantity3:number=0;
n=1;
plus3(){
  if(this.i !=5){
    this.i++;
    this.quantity3= this.i;
  }
}
minus3(){
  if(this.i !=0){
    this.i--;
    this.quantity3= this.i;
  }
}
quantity4:number=0;
o=1;
plus4(){
  if(this.i !=5){
    this.i++;
    this.quantity4= this.i;
  }
}
minus4(){
  if(this.i !=0){
    this.i--;
    this.quantity4= this.i;
  }
}
quantity5:number=0;
p=1;
plus5(){
  if(this.i !=5){
    this.i++;
    this.quantity5= this.i;
  }
}
minus5(){
  if(this.i !=0){
    this.i--;
    this.quantity5= this.i;
  }
}
quantity6:number=0;
q=1;
plus6(){
  if(this.i !=5){
    this.i++;
    this.quantity6= this.i;
  }
}
minus6(){
  if(this.i !=0){
    this.i--;
    this.quantity6= this.i;
  }
}

}
