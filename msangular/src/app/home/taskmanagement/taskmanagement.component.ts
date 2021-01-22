import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup, NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material';


import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/task.model';
import { ProjectmanagementService } from 'src/app/shared/projectmanagement.service';
import{TaskmanagementService} from 'src/app/shared/taskmanagement.service'
import { TableComponent } from 'src/app/table/table.component';
import { TaskpopupComponent } from 'src/app/popup/taskpopup/taskpopup.component';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent implements OnInit {

  project:Project[];
  taskmodel = new Task();
  disableSelect = new FormControl(false);


  dtOptions: DataTables.Settings = {};
  showModal: boolean;


  show=false;
  showdate=true;
  isReadOnly=false;
  hidedate= true;
  msg;
  selected = 'Queue';
  optionDisabled:any;
  teamMember=[];

  isAssign:any;
  isStart:any;
  isEnd:any;
  
  statusControl = new FormControl('', Validators.required);
  projectControl= new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  options = ['Queue','Assign','Started','Completed','ON hold','Cancelled'];






  constructor(
    public projectService:ProjectmanagementService,
    public taskService:TaskmanagementService ,
    private toastr: ToastrService,
    public dialog:MatDialog
    )
   {
 
    }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true

    }
//assign date

this.isAssign = false;
this.isStart=false;
this.isEnd=false;


    this.fn_ResetForm();
    this.fn_RefreshProjectList();
    this.fn_RefreshTaskList();

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
        createdOn:null,
        assignOn:null,
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

    this.fn_ResetForm();
this.selected = "Queue";
    this.isReadOnly = false;

    $("#show_content").click(function () {
    
      $("#hide_content,#table-content").show();
      var elmnt = document.getElementById("btn_save");
      elmnt.scrollIntoView();

    })

    this.show = true;


  }
  fn_Save(form:NgForm)
  {      
    this.taskmodel.taskStatus = this.selected;

    if (form.value._id == undefined || form.value._id == '' )
    {

      this.taskmodel = form.value;
      this.taskmodel.taskStatus = this.selected
      setTimeout(function () {
        this.taskmodel.createdOn = new Date()
      }, 3000);

      this.taskService.postTask( this.taskmodel).subscribe((data) => {

        this.fn_RefreshTaskList();
        this.fn_ResetForm();

        console.log("The data is", data);
        this.toastr.success(" OK","Task Added Successfully", 
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
    else
    {
        this.taskService.putTask( this.taskmodel).subscribe((res) => {

           console.log(res);
          this.fn_RefreshTaskList();
          $("#hide_content").hide();

          this.toastr.success("OK","Task Updated Successfully", 
            {
              timeOut: 2000,
              progressAnimation: 'increasing',

            })
            this.fn_ResetForm();
            this.fn_RefreshProjectList();
        },
          (error) => {
            this.msg = JSON.stringify(error.error);
            this.toastr.error("Error", this.msg,
              {
                timeOut: 4000
              })
          });

this.selected ="Queue";

    }


  }

  fn_Select(projectId)
  {
    this.projectService.getOneProjectList(projectId).subscribe((res:any)=>
    {
      while(this.teamMember.length){
        this.teamMember.pop();
      }
      let task =  res.projectMembers

      for(let i=0;i<task.length;i++)
      {
        this.teamMember.push(task[i])
      }
      this.teamMember.push(res.projectLead)

    })
  }

  fn_Cancel()
  {
    this.show = false;
    this.fn_ResetForm();

  }
  fn_Date()
  {
  
    var startDate , assignDate;
    startDate =  $("#startOn").val() ;
    assignDate = $("#assignOn").val();

    console.log("startDate",startDate)
    console.log("assignDate",assignDate);
              
    if (assignDate > startDate ) 
      {
        alert("Start date should not be less than Assign date");
      }
  }
  fn_Edit(task:Task) {
this.selected = task.taskStatus
    if(task.taskStatus=="Queue")
    {         
      this.taskmodel = task;
      this.taskmodel.startOn=null;
      this.taskmodel.endOn=null;
      this.taskmodel.assignOn=null;
      
    }

    else
    {
      this.taskmodel = task;
    }

    this.isReadOnly = true;
    this.show = true;
           
   this.fn_Change(this.taskmodel._id,this.taskmodel.assignOn,this.taskmodel.taskStatus)
    
    $("#hide_content").show();
    var elmnt = document.getElementById("btn_save");
    elmnt.scrollIntoView();
  }
  fn_Change2(s:any)
  {
console.log(s);
if(s =='Queue' )
{

}
else if(s=="Assign")
{
  
  this.isAssign = true;
  this.isReadOnly = false;


}

else if (s=='Started')
{
  this.isAssign = true;

  this.isReadOnly = true;

  this.isStart=true;
  this.isEnd=false;
  

 }
else if (s=='ON hold')
{
 
  this.isEnd=true;

}
else if (s=='Completed')
{
 
  this.isEnd=true;

}
else if (s=='Cancelled')
{
 
  this.isEnd=true;

}


  }
  fn_Change(taskId,taskDate,taskStatus)
{
  if(this.selected=='Queue' )
  {

  }
  else if(this.selected=="Assign")
  {
    
    this.isAssign = true;

    if(taskDate=='NA'|| taskDate==null)
    {
      this.isReadOnly = false;
    }
    else
    {
      this.isReadOnly = true;
    }
  }

  else if (this.selected=='Started')
  {
    this.isAssign = true;

    this.isReadOnly = true;

    this.isStart=true;
    this.isEnd=false;
    
    (document.getElementById("assign") as HTMLOptionElement).disabled = true;

   }
  else if (this.selected=='ON hold')
  {
   
    this.isEnd=true;

  }
  else if (this.selected=='Completed')
  {
   
    this.isEnd=true;

  }
  else if (this.selected=='Cancelled')
  {
   
    this.isEnd=true;

  }


}
fn_View(task:Task)
{
  this.taskmodel = task;
  let dialogRef = this.dialog.open(TaskpopupComponent,{data:{tasks:this.taskmodel}})

}



}
