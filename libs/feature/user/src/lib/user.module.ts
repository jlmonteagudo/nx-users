import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiLayoutModule } from '@users/ui/layout';
import { UiComponentsModule } from '@users/ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserNewComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiLayoutModule,
    UiComponentsModule
  ]
})
export class UserModule { }
