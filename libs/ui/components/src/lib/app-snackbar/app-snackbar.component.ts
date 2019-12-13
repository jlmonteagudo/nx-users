import { Component, Inject, HostBinding } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  template: `
    <mat-icon *ngIf="data.icon">{{data.icon}}</mat-icon><span style="margin-left: 10px;">{{data.message}}</span>
  `,
  styles: [` :host { display: flex; }`]
})
export class AppSnackbarComponent {

  @HostBinding('style.color') color: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: AppSnackbarData) {
    this.color = data.type;
  }

}

export interface AppSnackbarData {
  message: string;
  icon: string;
  type: MessageType;
}

export enum MessageType {
  info = '#5BFF33',
  error = '#FF9090'
}
