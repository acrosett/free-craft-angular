import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animations } from './animations/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animations]
})
export class AppComponent  {
  title = 'free-craft-app';

  @ViewChild('footer') footer: ElementRef<HTMLElement>;

  public getRouterOutletState(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  someExpression: any = true;
  captureStartEvent(event: any) {
    // the toState, fromState and totalTime data is accessible from the event variable
    this.footer.nativeElement.style.visibility = 'hidden';
  }

  captureDoneEvent(event: any) {
    // the toState, fromState and totalTime data is accessible from the event variable
    this.footer.nativeElement.style.visibility = 'unset';
  }
}

