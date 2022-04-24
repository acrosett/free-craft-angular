import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { SeoService } from '../seo.service';
import { ResponseStatusDto } from './ResponseStatusDto';
import { ShopItemData } from './shopItemData';
import { ARCHITECTE_PRODUCT, ARTISTE_PRODUCT, CREATEUR_PRODUCT, ENTREPRISE_PRODUCT, MAITRE_PRODUCT, MEMBERSHIP_ID, PORTAL_ID, shopItems } from './shopItems';


@Component({
  selector: 'error-popup',
  templateUrl: 'error-popup.html',
})
export class ErrorDialog {

  constructor(public dialog: MatDialog){}

  closeDialog(){
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'success-popup',
  templateUrl: 'success-popup.html',
})
export class SuccessDialog {

  constructor(public dialog: MatDialog){}
  
  closeDialog(){
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, AfterViewInit {

  apiSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private http: HttpClient, private seo: SeoService) { }

  PORTAL_ID = PORTAL_ID;
  MEMBERSHIP_ID = MEMBERSHIP_ID;

  ARCHITECTE_PRODUCT = ARCHITECTE_PRODUCT
  ENTREPRISE_PRODUCT = ENTREPRISE_PRODUCT
  ARTISTE_PRODUCT = ARTISTE_PRODUCT
  CREATEUR_PRODUCT = CREATEUR_PRODUCT
  MAITRE_PRODUCT = MAITRE_PRODUCT

  items: ShopItemData[];

  isMembre = false;

  responseStatusDto: ResponseStatusDto = undefined;

  // errorPseudo = true;
  // activityPseudo = null;//"08/09/2020 16h30";

  progress = false;

  checked = false;

  timeout = null;

  ngOnInit(): void {
    this.items = shopItems;
    this.seo.updateTitle("Free-Craft - Boutique du serveur");

  }

  clickButton(){
    alert("hello");
  }

  ngAfterViewInit() {
    if (location.hash) {

      if (location.hash == "#error") {
        this.dialog.open(ErrorDialog);
      }else if(location.hash == "#success"){
        this.dialog.open(SuccessDialog);
      }

    }
    
  }


  onSearchChange(searchValue: string): void {
    this.items[0].url = null;
    this.responseStatusDto = undefined;
    this.progress = false;

    // Fade out the ripple later.
    

    if (searchValue !== '') {
      clearTimeout(this.timeout);
      this.timeout = setTimeout( e => {

        this.progress = true;
        this.apiSubscription.unsubscribe();
        this.apiSubscription = this.getUUID(searchValue).subscribe(obj => {
          console.log(obj);
          this.responseStatusDto = obj;
          this.progress = false;
        }, error => {
          console.log(error);
          this.progress = false;
          this.responseStatusDto = null;
        });
      }, 1000);
    }

  }

  getUUID(pseudo: string): Observable<ResponseStatusDto> {
    return this.http.get<ResponseStatusDto>('/api/shop?pseudo=' + pseudo);
  }
}
