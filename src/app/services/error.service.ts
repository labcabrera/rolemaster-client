import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private snackBar: MatSnackBar) { }

  displayError(error: any) {
    console.log("Error: ", error);
    const message = this.getErrorMessage(error)
    this.snackBar.open(message, "Close", {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }

  getErrorMessage(error: any): string {
    if(error.error && error.error.message) {
      return error.error.message;
    }
    if(error.status == 0) {
      return `Unable to connect to the backend.`;
    }
    if(error.statusText && error.url) {
      return `${error.statusText}: ${error.url}`; 
    }
    return "Unknown error."
  }

}
