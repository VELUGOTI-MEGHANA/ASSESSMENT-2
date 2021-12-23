import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UpdateInterface } from "./UpdateInterface";

@Injectable({ providedIn: 'root' })

export class UpdateService {
    constructor(private http:HttpClient) { }
    updatePriority(task_ID:number,priority:string):Observable<UpdateInterface[]>{
    return this.http.get<UpdateInterface[]>("http://localhost:8080/taskid/"+task_ID+"/priority/"+priority);
    }
}