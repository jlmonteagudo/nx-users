import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserResolver } from '@users/data-access';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'new',
    component: UserNewComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
