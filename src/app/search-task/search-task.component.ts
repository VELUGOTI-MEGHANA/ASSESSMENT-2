






import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterfaceTask } from './InterfaceTask'
import {SearchTaskService} from './SearchTaskService'

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  public tasks!:InterfaceTask[];
  
  form:any;
  task_ID!:number;
 

  constructor(private us : SearchTaskService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      )
     
      
      });
      
  }
  onSubmit(task:any) {
   this.us.searchTask(task.task_ID).subscribe(data=>this.tasks=data)
    
    }

  }
