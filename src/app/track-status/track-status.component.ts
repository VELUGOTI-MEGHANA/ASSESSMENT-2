import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusInterface} from './StatusInterface'
import {TrackStatusService} from './TrackStatusService'

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html',
  styleUrls: ['./track-status.component.css']
})
export class TrackStatusComponent  implements OnInit {
  public tasks!:StatusInterface[];
  
  form:any;
  status!:string;
 

  constructor(private us : TrackStatusService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      status:new FormControl(
      "",
      Validators.compose([Validators.required])
      )
     
      
      });
      
  }
  onSubmit(task:any) {
   this.us.trackStatus(task.status).subscribe(data=>this.tasks=data)
    
    }

  }
