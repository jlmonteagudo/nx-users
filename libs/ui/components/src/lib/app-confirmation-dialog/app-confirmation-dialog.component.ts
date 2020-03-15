import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h4 mat-dialog-title>Confirmation</h4>
    <div mat-dialog-content>
      <div class="dialog-icon">
        <mat-icon color="primary">question_answer</mat-icon>
      </div>
      <div class="dialog-message">
        {{message}}
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onResult(false)" cdkFocusInitial>No</button>
      <button mat-button (click)="onResult(true)">Yes</button>
    </div>
 `,
  styles: [`
    mat-icon { font-size: 3rem; }
    .dialog-icon { float: left; width: 50px; }
    .dialog-message { float: left; width: 200px; margin-left: 20px; margin-bottom: 20px; }
  `]
})
export class AppConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<AppConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string) { }

  onResult(value: boolean): void {
    this.dialogRef.close(value);
  }

}
