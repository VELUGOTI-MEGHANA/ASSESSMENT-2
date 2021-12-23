


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateBookmarkInterface } from './UpdateBookmarkInterface'
import {UpdateBookmarkService} from './UpdateBookmarkService'

@Component({
  selector: 'app-update-bookmark',
  templateUrl: './update-bookmark.component.html',
  styleUrls: ['./update-bookmark.component.css']
})
export class UpdateBookmarkComponent implements OnInit {
  public tasks!:UpdateBookmarkInterface[];
  form:any;
  task_ID!:number;
  bookmark!:boolean;

  constructor(private us : UpdateBookmarkService) { }

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
    this.us.updateBookmark(task.task_ID,task.bookmark).subscribe(data=>this.tasks=data)
    }

}

