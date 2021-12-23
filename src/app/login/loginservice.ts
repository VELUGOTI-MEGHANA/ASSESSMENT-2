import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from "./user";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class loginservice {
    constructor(private http:HttpClient) { }
    login(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8080/login",user);
    }
}