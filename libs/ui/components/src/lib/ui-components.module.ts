import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSnackbarComponent } from './app-snackbar/app-snackbar.component';
import { UiLayoutModule } from '@users/ui/layout';


@NgModule({
  declarations: [
    AppSnackbarComponent
  ],
  entryComponents: [
    AppSnackbarComponent
  ],
  imports: [
    CommonModule,
    UiLayoutModule
  ],
  exports: [
    AppSnackbarComponent
  ]
})
export class UiComponentsModule { }
