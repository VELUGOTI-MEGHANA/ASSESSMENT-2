import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UpdateOwneridInterface } from "./UpdateOwneridInterface";

@Injectable({ providedIn: 'root' })

export class UpdateOwneridService {
    constructor(private http:HttpClient) { }
    updateOwnerid(task_ID:number,owner_ID:string):Observable<UpdateOwneridInterface[]>{
    return this.http.get<UpdateOwneridInterface[]>("http://localhost:8080/taskid/"+task_ID+"/ownerid/"+owner_ID);
    }
}