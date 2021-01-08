import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as $ from 'jquery';



import { Project } from 'src/app/model/project.model';
import { ProjectmanagementService } from 'src/app/shared/projectmanagement.service';
import { UserManagementService } from 'src/app/shared/user-management.service';
import { User } from 'src/app/shared/usermanagement.model';

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.css']
})
export class ProjectmanagementComponent implements OnInit {
msg;
show=false;
hide=false;
view=false;
users:User[];
project:Project[];

dtOptions: DataTables.Settings = {};

//multi-dropdown
dropdownList :any= [];
selectedItems = [];
dropdownSettings = {};

//mat table


projectmodel = new Project();

  constructor(public userService: UserManagementService,public projectService:ProjectmanagementService,private toastr: ToastrService) { }

  ngOnInit()
  {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true

    }

    this.fn_ResetForm()
  this.fn_RefreshProjectList();
  this.Fn_refreshUserList();
  this.fn_MultiDropDown();
  }
  fn_ResetForm(form?:NgForm)
{
  if(form)
  form.reset()
    this.projectmodel = {
      _id:"",
      projectName:"",
      projectState:"",
      createdOn:null,
      projectLead:null,
      projectMembers:[],
      ismap:null

    }

  this.fn_RefreshProjectList();
  $("#hide_content").hide();
}
  fn_MultiDropDown()
  {

    this.dropdownSettings =
    {
    singleSelection: false,
    idField: '_id',
    textField: 'name',

    itemsShowLimit: 5,
    };

  this.userService.getTeamMemberList().subscribe((res)=>
   {
    this.dropdownList = (res) ;
    //console.log("Dropdown res is",res);

   })

  }
  onItemSelect(item: any) {
    debugger;
    this.projectmodel.projectMembers.push(item.name);
    console.log("selecteditems",this.projectmodel.projectMembers);

  }


  fn_RefreshProjectList() {
    this.projectService.getProjectList().subscribe((res) => {
      this.projectService.projects = res as Project[];

    });
  }
  Fn_refreshUserList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
      //console.log("User refresh",res)

    });
  }
  Fn_AddUser()
  {
    this.fn_ResetForm();
    this.show = true;
    this.hide =  false;
    this.view = false
  }
  fn_Save(form: NgForm) {

    if (form.value._id == undefined || form.value._id == '' ) {
      this.projectmodel = form.value;


      this.projectService.postProject( this.projectmodel).subscribe((data) => {
        this.fn_RefreshProjectList()
        console.log("The data is", data);
        this.toastr.success("Project Added Successguuly", "Your Request has sent !!!",
          {
            timeOut: 2000,
            progressAnimation: 'increasing',

          })
          $("#hide_content").hide();
          window.location.reload();


      }, (error) => {
        this.msg = JSON.stringify(error.error);
        this.toastr.error(this.msg,"Error",
          {
            timeOut: 2000
          })
      });
    }
    else {
      this.projectService.putProject( this.projectmodel).subscribe((res) => {
        console.log(res);

        this.fn_RefreshProjectList();

        $("#hide_content").hide();

        this.toastr.success("Data Updated Successguuly", "Your Request has sent !!!",
          {
            timeOut: 2000,
            progressAnimation: 'increasing',

          })
      },
        (error) => {
          this.msg = JSON.stringify(error.error);
          this.toastr.error("Error", this.msg,
            {
              timeOut: 4000
            })
        });
    }



  }
fn_Cancel()
{
this.show = false;
}

fn_Change(userId,userState)
{
  debugger;
  console.log(userId,userState)
  if(userState=='started')
  {
    this.projectService.isMap(userId).subscribe();

  }
  else
  {
    this.projectService.isUnMap(userId).subscribe();

  }

}

fn_Map(project:Project)
{
console.log("project map",project)
  this.projectmodel = project;

  this.hide=true;
  this.show = true;
  this.view= false;

  $("#hide_content").show();

}
fn_View(project:Project)
{
  this.projectmodel = project;

  this.hide=true;
  this.show = false;
  this.view=true;

  $("#hide_content").show();

}

}

