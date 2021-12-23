import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import{UserFormComponent}  from './user-form/user-form.component' 
import { TaskFormComponent } from './task-form/task-form.component';
import { delettaskcomponent } from './deletetask/deletetask.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TrackStatusComponent} from './track-status/track-status.component';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { UpdateNotesComponent} from './update-notes/update-notes.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { UpdateOwneridComponent } from './update-ownerid/update-ownerid.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [{path:'admin' , component:AdminComponent},
{ path:'', redirectTo:'/login', pathMatch:'full'},
{path:'user-form' , component:UserFormComponent},
{path:'task-form' , component:TaskFormComponent},
{path:'deletetask' , component:delettaskcomponent},
{path:'search-task' , component:SearchTaskComponent},
{path:'track-status' , component:TrackStatusComponent},
{path:'update-bookmark' , component:UpdateBookmarkComponent},
{path:'update-notes' , component:UpdateNotesComponent},
{path:'update-ownerid' , component:UpdateOwneridComponent},
{path:'update-priority' , component:UpdatePriorityComponent}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
