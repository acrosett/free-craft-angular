import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input()
  input: string;

  

  ngOnInit(): void {
    //this.pageId = this.input;
  }



}
