import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Subscription, Observable } from 'rxjs';
import { Link } from '../Link';

@Component({
  selector: 'app-progres-item',
  templateUrl: './progres-item.component.html',
  styleUrls: ['./progres-item.component.scss']
})
export class ProgresItemComponent implements OnInit, AfterViewInit {

  @Input()
  public title: string;

  @Input()
  public summary: string;

  @Input()
  public content: string;

  @Input()
  public id: string;

  @Input()
  public links: Link[];

  @Output() switchpanelevent: EventEmitter<any> = new EventEmitter();

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  @ViewChild('panel') panel: MatExpansionPanel;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe((newid) => this.checkopen(newid));
  }

  ngAfterViewInit() {
    if (location.hash) {
      setTimeout(() => {
        this.checkopen(location.hash.replace('#', ''));
    }, 0);
    }
  }

  placeAnchor() {
    location.href = 'progres#' + this.id;
  }

  checkopen(newid){
    if (newid === this.id) {
      this.panel.open();
    }
  }

  switchpanel(id, newid) {

    this.panel.close();
    this.switchpanelevent.emit([id, newid]);

  }

}
