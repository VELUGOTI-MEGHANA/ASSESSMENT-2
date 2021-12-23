

import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup } from '@angular/forms';
import { UserService } from './userservice';
import { UserDetails } from './userdetails';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userService:UserService) { }
  user_id!:number;

  password!:string;

  user_name!:string;

  email!:EmailValidator;

  first_name!:string;

  last_name!:string;

  contact_number!:number;

  role!:string;

  is_active!:boolean;

  dob!:string;

  createdon!:string;

user:UserDetails=new UserDetails();
resuser:UserDetails=new UserDetails();
success:boolean=false;
  ngOnInit(): void {
  }
sendData(){
  this.user.created_ON=this.createdon;
  this.user.dob=this.dob;
  if(this.is_active)
  this.user.is_ACTIVE=true ;
  else
  this.user.is_ACTIVE=false ;
  this.user.role=this.role;
  this.user.contact_NUMBER=this.contact_number;
  this.user.last_NAME=this.last_name;
  this.user.first_NAME=this.first_name;
  this.user.email=this.email;
  this.user.username=this.user_name;
  this.user.password=this.password;
  this.user.user_ID=this.user_id;

console.log(this.user)
this.userService.addUser(this.user).subscribe(
res=>{console.log(res)
  this.resuser=res;
  this.success=true;
},
err=>{console.log(err)}
)
}
}
