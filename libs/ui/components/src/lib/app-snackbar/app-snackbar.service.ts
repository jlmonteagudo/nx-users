import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AppSnackbarData, MessageType, AppSnackbarComponent } from './app-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class AppSnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  info(message: string) {
    this.displaySnackbar(message, 'check_circle_outline', MessageType.info);
  }

  error(message: string) {
    this.displaySnackbar(message, 'cancel_presentation', MessageType.error);
  }

  errorNoIcon(message: string) {
    this.displaySnackbar(message, null, MessageType.error);
  }

  private displaySnackbar(message: string, icon: string, type: MessageType) {
    const data: AppSnackbarData = { message, icon, type };
    this.snackBar.openFromComponent(AppSnackbarComponent, {data, duration: 3000});
  }

}
