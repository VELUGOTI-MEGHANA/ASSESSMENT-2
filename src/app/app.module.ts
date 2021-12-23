import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { delettaskcomponent } from './deletetask/deletetask.component';
import { LoginComponent } from './login/login.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { UpdateOwneridComponent } from './update-ownerid/update-ownerid.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { UpdateBookmarkComponent} from './update-bookmark/update-bookmark.component';
import { UserFormComponent } from './user-form/user-form.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,delettaskcomponent,LoginComponent,SearchTaskComponent,TaskFormComponent,TrackStatusComponent,UpdateOwneridComponent,UpdatePriorityComponent,UpdateNotesComponent,UpdateBookmarkComponent,UserFormComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
