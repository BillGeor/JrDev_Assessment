import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'jrDev-Asessment';
  
  screenSub: Subscription;
  breakpointClass: String;

  constructor(
    public breakpointObserver: BreakpointObserver,
  ) { }
  
  ngOnInit() {
    this.screenSub = this.breakpointObserver
      .observe([('(min-width: 450px)'), ('(min-width: 610px)')])
      .subscribe( result => {
        if (result.breakpoints["(min-width: 450px)"]) {
          if (result.breakpoints["(min-width: 610px)"]) {
            this.breakpointClass = "large";
          } else {
            this.breakpointClass = "medium";
          }
        } else {
          this.breakpointClass = "small";
        }
      });
  }

  ngOnDestroy() {
    this.screenSub.unsubscribe();
  }

  
}
