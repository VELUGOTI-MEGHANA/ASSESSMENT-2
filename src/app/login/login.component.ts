import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginservice } from './loginservice';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username:string=''
   PASSWORD:string=''
   user:User=new User();
  constructor(private service:loginservice,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  if(this.username==='Meghana' && this.PASSWORD==='maggi123'){
       this.router.navigate(['/admin']);
  }
  else{

  
  this.user.username=this.username
  this.user.password=this.PASSWORD
  console.log(this.user)
   this.service.login(this.user).subscribe(
     res =>{
       console.log(res)
     }
   )
}
}
}
