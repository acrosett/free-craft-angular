import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/faq/Link';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public date: string;

  @Input()
  public author: string;

  @Input()
  public subtitle: string;

  @Input()
  public content: string;

  @Input()
  public id: string;

  @Input()
  public img: string;



  constructor() { }

  ngOnInit(): void {
  }

}
