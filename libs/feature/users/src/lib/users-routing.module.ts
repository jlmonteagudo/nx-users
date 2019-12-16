import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UserResolver } from '@users/data-access';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'new',
    component: UsersNewComponent
  },
  {
    path: 'edit/:id',
    component: UsersEditComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
