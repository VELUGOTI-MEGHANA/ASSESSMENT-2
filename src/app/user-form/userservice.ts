import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserDetails } from './userdetails';
@Injectable({
    providedIn: 'root'
})
export class UserService {
     //
 private url:string = "http://localhost:8080/adduser";


   //  private url:string = "http://localhost:3000/employees";


   // private url1 : string = "http://localhost:8088/show";
   constructor(private http:HttpClient){}
   
   addUser(user:UserDetails): Observable<UserDetails>{
     //  alert(JSON.stringify(task))
    return this.http.post<UserDetails>(this.url,user);
   }
   
}