import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { TaskDetails } from './taskdetails';
@Injectable({
    providedIn: 'root'
})
export class TaskService {
     //
 private url:string = "http://localhost:8080/addtask";


   //  private url:string = "http://localhost:3000/employees";


   // private url1 : string = "http://localhost:8088/show";
   constructor(private http:HttpClient){}
   
   addTask(task:TaskDetails): Observable<TaskDetails>{
     //  alert(JSON.stringify(task))
    return this.http.post<TaskDetails>(this.url,task);
   }
   
}