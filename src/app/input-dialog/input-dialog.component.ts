import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit, OnDestroy {
  dialogOpen: boolean = false;
  // dialogOpen: boolean = true;
  firstName: String = "";
  lastName: String = "";
  screenSub: Subscription;

  inputContainerClass: String;
  labelClass: String;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public mediaMatcher: MediaMatcher
  ) { }
  
  ngOnInit() {
    this.screenSub = this.breakpointObserver
      .observe([('(min-width: 450px)'), ('(min-width: 610px)')])
      .subscribe( result => {
        if (result.breakpoints["(min-width: 450px)"]) {
          if (result.breakpoints["(min-width: 610px)"]) {
            console.log("Large")
            this.inputContainerClass = "clr-col-12"
            this.labelClass = "clr-col-md-3"
          } else {
            console.log("Medium")
            this.inputContainerClass = ""
            this.labelClass = "clr-col-md-3"
          }
        } else {
          console.log("Small")
          this.inputContainerClass = ""
          this.labelClass = "clr-col-12"
        }
      });
  }

  openDialog () {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  ngOnDestroy() {
    this.screenSub.unsubscribe();
  }

}


