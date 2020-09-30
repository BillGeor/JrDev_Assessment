import { Component } from '@angular/core';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent {
  clrModalCloseable = true;
  dialogOpen: boolean = false;
  firstName: String = "";
  lastName: String = "";

  constructor() { }

  openDialog () {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

}
