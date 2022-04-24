import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Observable, Subject } from 'rxjs';
import { ItemData } from './ItemData';
import { progresItems } from './progresItems';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styleUrls: ['./progres.component.scss']
})
export class ProgresComponent implements OnInit {

  eventsSubject: Subject<string> = new Subject<string>();

  public items: ItemData[] = [];

  public sValue = '';

  constructor(private http: HttpClient) { }

  switchpanel(id, newid) {
    this.sValue = '';
    this.items = progresItems;
    this.eventsSubject.next(newid);
  }


  onSearchChange(searchValue: string): void {
    this.items = progresItems;
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
    this.items = progresItems;
  }


}
