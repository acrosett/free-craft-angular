import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../seo.service';
import { BlogItemData } from './blogItemData';
import { blogItems } from './blogItems';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  article: BlogItemData;

  public items: BlogItemData[] = [];

  constructor(private route: ActivatedRoute, private seo: SeoService) { }

  ngOnInit(): void {
    this.items = blogItems;
    this.seo.updateTitle("Free-Craft - Articles");
    this.article = this.items.filter(it => it.id == this.route.snapshot.paramMap.get('article'))[0];
  }

}
