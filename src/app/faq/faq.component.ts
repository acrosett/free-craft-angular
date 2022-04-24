import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Observable, Subject } from 'rxjs';
import { SeoService } from '../seo.service';
import { ItemData } from './ItemData';
import { items } from './items';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  eventsSubject: Subject<string> = new Subject<string>();

  public items: ItemData[] = [];

  public sValue = '';

  constructor(private http: HttpClient, private seo: SeoService) { }

  switchpanel(id, newid) {
    this.sValue = '';
    this.items = items;
    this.eventsSubject.next(newid);
  }

  updateSeo(id){
    const currentItems = this.items.filter(it => it.id == id);
    if(currentItems.length > 0){
      const currentItem = currentItems[0];
      this.seo.updateTitle(currentItem.title);
      this.seo.updateDescription(currentItem.content);
    }else{
      this.seo.updateTitle("Free-Craft - Foire aux questions")
    }
  }

  getWeights(): Observable<any> {

    return this.http.get<any>('/api/faq')

  }

  onSearchChange(searchValue: string): void {
    this.items = items;
    if (searchValue !== '') {
      this.items = this.items.filter( it => {
        return it.title.toLowerCase().includes(searchValue.toLowerCase())
        ||
        it.content.toLowerCase().includes(searchValue.toLowerCase())
        ||
        it.summary.toLowerCase().includes(searchValue.toLowerCase())
        ||
        it.id.toLowerCase().includes(searchValue.toLowerCase())
        ;
      });
    }

  }

  ngOnInit(): void {
    this.items = items;
    const id = location.hash.replace('#', '');
    this.updateSeo(id);


    this.getWeights().subscribe(res => {
      this.items.forEach(tem => {
        tem.weight = res[tem.id];
      })
      this.items.sort( (a,b) => a.weight < b.weight ? 1 : -1);
    });
  }


}
