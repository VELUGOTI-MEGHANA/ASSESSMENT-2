
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateOwneridInterface } from './UpdateOwneridInterface'
import {UpdateOwneridService} from './UpdateOwneridService'

@Component({
  selector: 'app-update-ownerid',
  templateUrl: './update-ownerid.component.html',
  styleUrls: ['./update-ownerid.component.css']
})
export class UpdateOwneridComponent implements OnInit {
  public tasks!:UpdateOwneridInterface[];
  form:any;
  task_ID!:number;
  owner_ID!:number;

  constructor(private us : UpdateOwneridService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      owner_ID:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
    this.us.updateOwnerid(task.task_ID,task.owner_ID).subscribe(data=>this.tasks=data)
    }

}
