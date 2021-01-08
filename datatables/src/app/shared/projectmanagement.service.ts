import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectmanagementService {

  selectedProject:Project;
  projects: Project[];

  constructor(private http:HttpClient) { }

  readonly baseURL = "http://localhost:3000/project";

  getProjectList()
  {
    return this.http.get(this.baseURL);
  }
  postProject(project:Project)
  {
     return this.http.post(this.baseURL,project)
  }
  putProject(project: Project) {
    return this.http.put(this.baseURL + `/${project._id}`, project);
  }
}
