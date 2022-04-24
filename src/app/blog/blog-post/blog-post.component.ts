import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/seo.service';
import { BlogItemData } from '../blogItemData';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, AfterViewInit {

  @ViewChild('back') back: ElementRef<HTMLElement>;

  @Input()
  article: BlogItemData;

  innerHTML;

  prevScrollpos = 0;

  constructor(private http: HttpClient, private seo: SeoService) {}
  ngAfterViewInit(): void {
    const heigth = window.screen.width * 138/1920;
    this.back.nativeElement.style.top = 2*heigth+"px";
  }

  ngOnInit(): void {
    this.seo.updateTitle(this.article.title);
    this.seo.updateDescription(this.article.subtitle);
    this.seo.updateOgImage('/assets/img/blog/'+this.article.id + '.webp');
    this.seo.updateOgType("article");
    this.http.get('assets/posts/' + this.article.id +".html",
         { responseType: 'text' })
    .subscribe(data => {
        this.innerHTML = data;
    });

  }
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      const heigth = window.screen.width * 138/1920;
 
      if(currentScrollPos > heigth){

          this.back.nativeElement.style.top = heigth+"px";
        
      }else{
          this.back.nativeElement.style.transitionProperty = 'none';
          this.back.nativeElement.style.top = heigth + (heigth - currentScrollPos) +'px';
    
      }
   
    } else {
      this.back.nativeElement.style.transitionProperty = 'top';
      this.back.nativeElement.style.top = '-8%';
    }
    this.prevScrollpos = currentScrollPos;
  }


}

