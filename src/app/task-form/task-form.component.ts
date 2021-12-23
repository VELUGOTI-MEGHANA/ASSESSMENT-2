import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from './service';
import { TaskDetails } from './taskdetails';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private taskService:TaskService) { }
task_id!:number;
owner_id!:number;
creator_id!:number;
name! :string;
description !:string;
status !:string;
priority!:string;
notes!:string;
isbookmarked!:boolean;
statuschangedon!:string;
createdon!:string;

task:TaskDetails=new TaskDetails();
restask:TaskDetails=new TaskDetails();
success:boolean=false;
  ngOnInit(): void {
  }
sendData(){
  this.task.created_ON=this.createdon;
  this.task.creator_ID=this.creator_id;
  this.task.description=this.description;
  if(this.isbookmarked)
  this.task.isbookmarked=true ;
  else
  this.task.isbookmarked=false ;
  this.task.name=this.name;
  this.task.notes=this.notes;
  this.task.owner_ID=this.owner_id;
  this.task.priority=this.priority;
  this.task.status=this.status;
  this.task.status_CHANGED_ON=this.statuschangedon;
  this.task.task_ID=this.task_id;
console.log(this.task)
this.taskService.addTask(this.task).subscribe(
res=>{console.log(res)
  this.restask=res;
  this.success=true;
},
err=>{console.log(err)}
)
}
}
