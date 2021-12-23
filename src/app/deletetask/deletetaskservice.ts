import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { deletetaskinterface } from "./deletetaskinterface"

@Injectable({ providedIn: 'root' })

export class deletetaskservice {
    constructor(private http:HttpClient) { }
    deleteTask(task_ID:number):Observable<deletetaskinterface[]>{
    return this.http.delete<deletetaskinterface[]>("http://localhost:8080/deletetask/"+task_ID);
    }
}