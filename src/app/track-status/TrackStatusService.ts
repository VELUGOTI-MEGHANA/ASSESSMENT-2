import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { StatusInterface } from './StatusInterface'

@Injectable({ providedIn: 'root' })

export class TrackStatusService {
    constructor(private http:HttpClient) { }
    trackStatus(status:string):Observable<StatusInterface[]>{
    return this.http.get<StatusInterface[]>("http://localhost:8080/status/"+status);
    }
}