




import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateNotesInterface } from './UpdateNotesInterface'
import {UpdateNotesService} from './UpdateNotesService'

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {
  public tasks!:UpdateNotesInterface[];
  form:any;
  task_ID!:number;
  notes!:string;

  constructor(private us : UpdateNotesService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      notes:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
    this.us.updateNotes(task.task_ID,task.notes).subscribe(data=>this.tasks=data)
    }

}
