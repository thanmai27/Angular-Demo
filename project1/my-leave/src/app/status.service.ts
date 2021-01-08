import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Status} from './model/status';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  viewRight():boolean
  {
    return true;
  }
  selectedstatus:Status;
  status:Status[];

  readonly baseURL='http://localhost:3657/status';


  constructor(private http:HttpClient) { }

  postStatus(st:Status)
  {
    return this.http.post(this.baseURL,st);
  }

  getStatusList()
  {
    return this.http.get(this.baseURL);
  }

}
