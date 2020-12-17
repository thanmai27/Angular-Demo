import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// import {ContactService } from '../../shared/contact.service';
import {ContactService } from '../../shared/contact.service';
import {Contact} from '../../shared/contact.model';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  msg;
  public show:boolean = false;
  user = {
    message: '',
    fileContent :''
  };
    constructor(private toastr: ToastrService,private contactService:ContactService) { }

  ngOnInit() {
  }


Fn_Clear(form?:NgForm)
{
  if(form)
  {
    form.reset();
  }
}

 fn_changeMandatory()
{

    this.show = !this.show;


}



 Fn_Submit(form:NgForm)
  {
   this.contactService.selectedConatct = form.value;
    this.contactService.postContact(form.value).subscribe( (data) =>
      {
      this.Fn_Clear(form);
      console.log(data);
      this.toastr.success("Data Added Successguuly","Your Request has sent !!!",
      {
        timeOut:2000,
        progressAnimation:'increasing',

      })
      }

   );

  }


}
