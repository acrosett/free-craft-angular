import { Component, Inject, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.component.html',
  styleUrls: ['./eula.component.scss']
})
export class EulaComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateTitle("Conditions Générales d’Utilisation de free-craft.fr")
  }

}
