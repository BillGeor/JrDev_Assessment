import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild(InputDialogComponent) dialogue: InputDialogComponent;
 
  constructor() { }

  onOpenDialogue() {
    this.dialogue.openDialog()
  }

}
