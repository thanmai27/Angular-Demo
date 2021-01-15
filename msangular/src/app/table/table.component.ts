import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Project } from '../model/project.model';
import { ProjectmanagementService } from '../shared/projectmanagement.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  project:Project[];

  showModal: boolean;
content: string;
title: string;


  displayedColumns: string[] = ['projectName', 'projectState', 'projectLead', 'createdOn','actions'];
  dataSource: MatTableDataSource<Project>;

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }
  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    if (this.dataSource){
      this.dataSource.sort = value;
    }
  }
  constructor(public projectService:ProjectmanagementService) {


  }

  ngOnInit() {

        this.getAllProject();
  }

  public getAllProject()
  {
    this.projectService.getProjectList().subscribe((res)=>
    {
      let list =  res as Project[]
      this.dataSource = new MatTableDataSource(list);

    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  fn_edit()
  {
    alert("Edit")
  }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    this.content = "This is content!!"; // Dynamic Data
    this.title = "This is title!!";    // Dynamic Data
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
}
