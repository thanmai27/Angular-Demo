import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup, NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/task.model';
import { ProjectmanagementService } from 'src/app/shared/projectmanagement.service';
import{TaskmanagementService} from 'src/app/shared/taskmanagement.service'

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent implements OnInit {

  project:Project[];
  taskmodel = new Task();

  dtOptions: DataTables.Settings = {};
  showModal: boolean;
  content: string;
  title: string;


  show=false;
  showdate=true;
  msg;
teamMember=[];
  statusControl = new FormControl('', Validators.required);
  projectControl= new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  options = ['Queue','Assign','Started','Completed','ON hold','Cancelled'];

  minDate: Date;



  constructor(
    public projectService:ProjectmanagementService,
    public taskService:TaskmanagementService ,
    private toastr: ToastrService,
    )
   {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true

    }

    this.fn_ResetForm();
    this.fn_RefreshProjectList();
    this.fn_RefreshTaskList()
  }

  fn_ResetForm(form?:NgForm)
  {
    if(form)
    form.reset()
      this.taskmodel = {
        _id:"",
        projectName:"",
        teamMember:"",
        taskStatus:"",
        startOn:null,
        endOn:null,
      }

    this.fn_RefreshProjectList();
    this.fn_RefreshTaskList()
    $("#hide_content").hide();
  }
  fn_RefreshTaskList() {
    this.taskService.getTaskList().subscribe((res) => {
      this.taskService.tasks= res as Task[];

    });
  }
  fn_RefreshProjectList() {
    this.projectService.getProjectList().subscribe((res) => {
      this.projectService.projects = res as Project[];

    });
  }
  Fn_AddTask()
  {
    $("#show_content").click(function () {
      $("#hide_content,#table-content").show();
    })
    this.show = true;

  }
  fn_Save(form:NgForm)
  {
    if (form.value._id == undefined || form.value._id == '' )
    {
      this.taskmodel = form.value;


      this.taskService.postTask( this.taskmodel).subscribe((data) => {

        this.fn_RefreshTaskList();
        this.fn_ResetForm();

        console.log("The data is", data);
        this.toastr.success("Project Added Successguuly", "Your Request has sent !!!",
          {
            timeOut: 2000,
            progressAnimation: 'increasing',

          })
          $("#hide_content").hide();





      }, (error) => {
        this.msg = JSON.stringify(error.error);
        this.toastr.error(this.msg,"Error",
          {
            timeOut: 2000
          })
      });
    }
  }

  fn_Select(projectId)
  {
    console.log("projectId",projectId)
    this.projectService.getOneProjectList(projectId).subscribe((res:any)=>
    {
      while(this.teamMember.length){
        this.teamMember.pop();
      }
      let task =  res.projectMembers
      console.log(res)

      for(let i=0;i<task.length;i++)
      {
        this.teamMember.push(task[i])
      }
console.log(task)
      this.teamMember.push(res.projectLead)

      console.log(this.teamMember)
    })
  }

  fn_Cancel()
  {
    this.show = false;

  }
  fn_Edit(task:Task) {
    this.taskmodel = task;
    this.show = true;
    $("#hide_content").show();
  }
  fn_Change(taskId,taskStatus)
{

  if(taskStatus=='Queue'|| taskStatus=='Cancelled')
  {
    this.showdate=false
  }
  else
  {
    this.showdate=true

  }

}
fn_View(task:Task)
{
  this.taskmodel = task;

  this.showModal = true; // Show-Hide Modal Check
  this.content = "This is content!!"; // Dynamic Data
  this.title = "This is title!!";    // Dynamic Data

}

fn_Modelshow()
{

}
//Bootstrap Modal Close event
fn_Modelhide()
{
  this.showModal = false;
}

}
