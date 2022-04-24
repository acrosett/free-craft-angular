import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateTitle("Politique de confidentialité de free-craft.fr")
  }

}
