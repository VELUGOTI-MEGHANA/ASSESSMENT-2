import { Component, OnInit } from '@angular/core';
import { deletetaskinterface } from './deletetaskinterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { deletetaskservice } from './deletetaskservice';
@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class delettaskcomponent implements OnInit {
  public tasks!:deletetaskinterface[];
  form:any;
  task_ID!:number;
  

  constructor(private us : deletetaskservice) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      bookmark:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
    this.us.deleteTask(task.task_ID).subscribe(data=>this.tasks=data)
    }

}
