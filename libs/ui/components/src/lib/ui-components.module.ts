import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSnackbarComponent } from './app-snackbar/app-snackbar.component';
import { UiLayoutModule } from '@users/ui/layout';
import { AppConfirmationDialogComponent } from './app-confirmation-dialog/app-confirmation-dialog.component';


@NgModule({
  declarations: [
    AppSnackbarComponent,
    AppConfirmationDialogComponent
  ],
  entryComponents: [
    AppSnackbarComponent,
    AppConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    UiLayoutModule
  ],
  exports: [
    AppSnackbarComponent,
    AppConfirmationDialogComponent
  ]
})
export class UiComponentsModule { }
