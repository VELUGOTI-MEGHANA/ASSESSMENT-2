import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UpdateNotesInterface } from "./UpdateNotesInterface";

@Injectable({ providedIn: 'root' })

export class UpdateNotesService {
    constructor(private http:HttpClient) { }
    updateNotes(task_ID:number,notes:string):Observable<UpdateNotesInterface[]>{
    return this.http.get<UpdateNotesInterface[]>("http://localhost:8080/taskid/"+task_ID+"/notes/"+notes);
    }
}