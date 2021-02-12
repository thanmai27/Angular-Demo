import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup, NgForm} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material';
import { DatePipe } from '@angular/common'
import * as XLSX from 'xlsx'; 


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
pp =false;
  disableSelect = new FormControl(false);

pro_id:any;
  dtOptions: any = {};
  showModal: boolean;
defaultName= "Nithin Kumar"

  show=false;
  showdate=true;
  isReadOnly=false;
  hidedate= true;
  startReadOnly:any;
  msg;
  selected = 'Queue';
  optionDisabled:any;
  teamMember=[];
  projectList=[];

  isAssign:any;
  isStart:any;
  isEnd:any;
  isCancel= false;
  
  statusControl = new FormControl('', Validators.required);
  projectControl= new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  options = ['Queue','Assign','Started','Completed','ON hold','Cancelled'];

test=[];
counter =0;



  constructor(
    public projectService:ProjectmanagementService,
    public taskService:TaskmanagementService ,
    private toastr: ToastrService,
    public dialog:MatDialog,
    public datepipe: DatePipe
    )
   {
 
    }

  ngOnInit() {
    
    setTimeout(function(){
      $('table').DataTable( {
      responsive: true,
      "lengthMenu": [5, 10, 25,50]
      } );
      }, 100);
    
//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 3,
//       processing: true,
//       // dom: 'Bfrtip',
//       //   buttons: [
//       //      'csv'
//       //   ]


//     };

// //assign date

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
        creadtedBy:"",
        modifiedBy:"",
        taskStatus:"",
        createdOn:null,
        assignOn:null,
        startOn:null,
        holdOn:null,
        endOn:null,
        cancelledOn:null,
        taskName:''
      }

    this.fn_RefreshTaskList()
    $("#hide_content").hide();
  }
  fn_RefreshTaskList() {
    this.taskService.getTaskList().subscribe((res) => {
      this.taskService.tasks= res as Task[];

    });
  }
  fn_RefreshProjectList() {
    this.projectService.getProjectList().subscribe((res:any) => {
      this.projectService.projects = res as Project[];

for(let i=0;i< res.length;i++)
{
  this.projectList.push(res[i].projectName);

}
    });
  }
  Fn_AddTask()
  {
    this.teamMember = [];

    setTimeout(()=>{      window.scrollTo(0, 500);    },100)
    this.fn_ResetForm();

   this.options = ['Queue','Assign'];

this.selected = "Queue";
this.pp =false;

    this.isReadOnly = false;

    $("#show_content").click(function () {
    
      $("#hide_content,#table-content").show();
    
    })

    this.show = true;
    this.isAssign=false;
    this.isStart=false;
    this.isEnd=false;
    this.isCancel= false;



  }
  fn_Save(form:NgForm)
  {   
    console.log(form.value)   
    this.taskmodel.taskStatus = this.selected;
    setTimeout(function () {
      this.taskmodel.createdOn = new Date()
    }, 3000);
    if (form.value._id == undefined || form.value._id == '' )
    {

      this.taskmodel = form.value;
      this.taskmodel.taskStatus = this.selected
        this.taskmodel.createdOn = new Date()
// this.taskmodel.creadtedBy = this.defaultName;
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


     // window.location.reload()

      }, (error) => {
        this.msg = JSON.stringify(error.error);
        this.toastr.error("Error",this.msg,
          {
            timeOut: 2000
          })
      });
    }
    else
    {
      if(this.taskmodel.taskStatus=="ON hold")
      {
        this.taskmodel.holdOn = this.taskmodel.endOn;
      }
      else if(this.taskmodel.taskStatus=="Started")
      {
        this.taskmodel.holdOn = null;
        this.taskmodel.endOn=null
      }
      else{
        this.taskmodel.holdOn = null;
      }
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
            setTimeout(()=>{ window.location.reload();},100)
           
        },
          (error) => {
            this.msg = JSON.stringify(error.error);
            this.toastr.warning( this.msg,"warning",
              {
                timeOut: 4000,

              })
          });


    }


  }

  fn_Select(projectId)
  {
    this.teamMember = [];
this.pro_id = projectId;
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

  fn_Edit(task:Task) {
    this.pp =true;

 console.log(task)
    setTimeout(()=>{window.scrollTo(0, 500);},100)

    this.teamMember = [];
console.log(this.projectList);
this.teamMember.push(task.teamMember)
// setTimeout(()=>{   let index = this.options.findIndex(x => x === task.taskStatus);
//   console.log(index);
//   for(let i=0;i<=index;i++)
//   {
//    // delete this.options[i];
//    this.options.splice(0, index); 


//   }
//  console.log(this.options) ;},2000)
 
    this.  fn_Change2(task.taskStatus);
     this.selected = task.taskStatus;

      this.taskmodel = task;
      this.isAssign = true;

    this.isReadOnly = true;
    this.show = true;
           
    
    $("#hide_content").show();
    window.scrollTo(0, 500);
  }

  fn_Change2(s:any)
  {
   
    console.log(s);

       
 
    if(s =='Queue' )
    {
      this.isAssign = true;
      this.isStart=false;
      this.isEnd=false;
     
      this.isReadOnly=true;
      
      this.options = ['Queue','Assign','Cancelled'];

    }
    else if(s=="Assign")
    {
      this.options = ['Assign','Started','ON hold','Cancelled'];

      if(this.taskmodel.assignOn== null)
      {
        this.isAssign = true;
        this.isReadOnly = false;
        this.isStart=false;
        this.isEnd=false;
      }
      else
      {
        this.isAssign = true;
        this.isReadOnly = true;
        this.isStart=false;
        this.isEnd=false;
      }
    

    }

    else if (s=='Started')
    {
      this.options = ['Started','Completed','ON hold','Cancelled'];

      this.isStart=true;

      this.isAssign = true;

      this.isReadOnly = true;

      this.isEnd=false;

      // if(this.taskmodel.startOn== null)
      // {
      //   this.startReadOnly=false;
        
      // }
      // else
      // {
      //           this.startReadOnly=true;


      // }


    }
    else if (s=='ON hold')
    {
    
      this.isEnd=true;
      this.isStart=true;
      this.options = ['Started','Completed','ON hold','Cancelled'];

this.taskmodel.endOn = null;
    }
    else if (s=='Completed')
    {
    
      this.isEnd=true;
      this.startReadOnly=true;


    }
    else if (s=='Cancelled')
    {
      this.options = ['Cancelled'];

      this.isCancel= true;

      this.startReadOnly=true;


    }


  }

fn_View(task:Task)
{
  // this.taskmodel = task;
  // this.selected =  task.taskStatus;
  // this.teamMember = [];
  // this.teamMember.push(task.teamMember);
  // if(task.taskStatus==="Completed" || task.taskStatus==="Cancelled")
  // {
  //  $("#hide_content").hide();

  // }
  // else{
  //   $("#hide_content").show();

  // }
// this.taskService.getchange(task._id).subscribe((data)=>console.log(data))
  let dialogRef = this.dialog.open(TaskpopupComponent,{data:{tasks:task}})

}


fn_Download()
{

 // this.taskService.downloadFile(    this.taskService.tasks, 'taskdetails');
 let element = document.getElementById('tabledata'); 
 const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 ws['!cols'] = [];
 ws['!cols'][8] = { hidden: true };


 /* generate workbook and add the worksheet */
 const wb: XLSX.WorkBook = XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

 /* save to file */
 XLSX.writeFile(wb, "task.xlsx");

}
}
