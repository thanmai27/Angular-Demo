import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

import { Project } from 'src/app/model/project.model';
import { User } from 'src/app/model/usermanagement.model';
import { ProjectmanagementService } from 'src/app/shared/projectmanagement.service';
import { UsermanagementService } from 'src/app/shared/usermanagement.service';

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

  projectmodel = new Project();

    constructor(public userService: UsermanagementService,public projectService:ProjectmanagementService) { }

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
      console.log("Dropdown res is",res);
     })

    }

    // fn_Datatable()
    // {
    //   $('#example2').DataTable({
    //     "paging": true,
    //     "lengthChange": false,
    //     "searching": true,
    //     "ordering": true,
    //     "info": true,
    //     "autoWidth": false,
    //     "responsive": true,
    //   });
    // }
    fn_RefreshProjectList() {
      this.projectService.getProjectList().subscribe((res) => {
        this.projectService.projects = res as Project[];
        console.log("Projectlistrefresh",res)

      });
    }
    Fn_refreshUserList() {
      this.userService.getUserList().subscribe((res) => {
        this.userService.users = res as User[];
        console.log("User refresh",res)

      });
    }
    Fn_AddUser()
    {
      this.show = true;
      this.hide =  false;
      this.view = false
    }
    fn_Save(form: NgForm) {

      if (form.value._id == undefined || form.value._id == '' ) {
        this.projectmodel = form.value;
        console.log(this.projectmodel);

        this.projectService.postProject(form.value).subscribe((data) => {
          form.resetForm();
          this.fn_RefreshProjectList()
          console.log("The data is", data);

            $("#hide_content").hide();
            window.location.reload();


        }, (error) => {
          this.msg = JSON.stringify(error.error);

        }



        );
      }
      else {
        this.projectService.putProject(form.value).subscribe((res) => {
        this.fn_RefreshProjectList();
          $("#hide_content").hide();


        },
          (error) => {
            this.msg = JSON.stringify(error.error);

          });
      }



    }
  fn_Cancel()
  {
  this.show = false;
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
