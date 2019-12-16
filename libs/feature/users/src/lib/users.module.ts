import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UiLayoutModule } from '@users/ui/layout';
import { UiComponentsModule } from '@users/ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

@NgModule({
  declarations: [UsersListComponent, UsersFormComponent, UsersNewComponent, UsersEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiLayoutModule,
    UiComponentsModule
  ]
})
export class UsersModule { }
