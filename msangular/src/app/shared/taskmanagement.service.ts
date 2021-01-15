import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../model/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskmanagementService {

  selectedTask:Task;
  tasks: Task[];
  constructor(private http:HttpClient) { }

  readonly baseURL = "http://localhost:3000/task";

  getTaskList()
  {
    return this.http.get(this.baseURL);
  }

  postTask(task:Task)
  {
    console.log(this.baseURL)
    console.log(task)

     return this.http.post(this.baseURL,task)
  }
}
