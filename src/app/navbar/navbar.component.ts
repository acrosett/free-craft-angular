import { AfterViewInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('navbar') navbar: ElementRef<HTMLElement>;
  @ViewChild('wrapper') wrapper: ElementRef<HTMLElement>;

  constructor(public router: Router) { }
  ngAfterViewInit(): void {

    const heigth = window.screen.width * 138/1920;
    this.navbar.nativeElement.style.top = heigth-2+'px';
    this.wrapper.nativeElement.style.height = heigth-2+'px';
  }

  prevScrollpos = 0;

  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event']) // for window scroll events
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

    const currentScrollPos = window.pageYOffset;
    const heigth = window.screen.width * 138/1920;
    this.wrapper.nativeElement.style.height = heigth-2+'px';
    if (this.prevScrollpos > currentScrollPos) {
      if(currentScrollPos < heigth){
        this.navbar.nativeElement.style.top = heigth-2-currentScrollPos+'px';
        //this.wrapper.nativeElement.style.height = heigth-2-currentScrollPos+'px';
        this.navbar.nativeElement.style.transition = 'none';
      }else{
        this.navbar.nativeElement.style.top = '0px';

        this.navbar.nativeElement.style.transition = 'top 0.3s';
      }

    } else {
      if(currentScrollPos < heigth + 62){
        this.navbar.nativeElement.style.top = heigth-2-currentScrollPos+'px';
        //this.wrapper.nativeElement.style.height = heigth-2-currentScrollPos+'px';
      }else{
        this.navbar.nativeElement.style.top = '-8%';
        //this.wrapper.nativeElement.style.height = '-8%';
      }
    }
    this.prevScrollpos = currentScrollPos;
  }
}
