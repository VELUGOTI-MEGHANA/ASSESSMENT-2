import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { InterfaceTask } from './InterfaceTask'

@Injectable({ providedIn: 'root' })

export class SearchTaskService {
    constructor(private http:HttpClient) { }
    searchTask(task_ID:number):Observable<InterfaceTask[]>{
    return this.http.get<InterfaceTask[]>("http://localhost:8080/taskid/"+task_ID);
    }
}