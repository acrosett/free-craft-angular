import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { ResponseStatusDto } from '../shop/ResponseStatusDto';
import { ErrorDialog, SuccessDialog } from '../shop/shop.component';
import { ShopItemData } from '../shop/shopItemData';
import { MEMBRE_PRODUCT, shopItems } from '../shop/shopItems';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  membreProduct = MEMBRE_PRODUCT;

  internalDisable = false;


  lastResponseStatusDto: ResponseStatusDto = null;

  url: string = null;

  @Input()
  contents: string[];

  @Input()
  product: string;

  @Input()
  member_contents: string;

  apiSubscription: Subscription = new Subscription();
  
  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  textInput: String;

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
    
  }

  ngAfterViewInit() {
    
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
          if(!this.responseStatusDto.unlocked) {
            this.textInput ="";
          }
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

  click() {
    // if(this.lastResponseStatusDto != this.responseStatusDto || this.url == null){
      this.lastResponseStatusDto = this.responseStatusDto;
      this.url = null;
      this.internalDisable = true;
      this.getLink(this.responseStatusDto.uuid, this.product).subscribe(obj => {
        console.log(obj);
        if(obj == null || obj == ""){
          this.snackBar.open("error", 'ok', {
            verticalPosition: 'top'
          });
          
        }else{
          this.snackBar.open(obj, 'ok', {
            verticalPosition: 'top'
          });

        }
        this.internalDisable = false;
        return;
        
      }, error => {
        console.log(error)
        this.snackBar.open(error, 'ok', {
          verticalPosition: 'top'
        });
        this.internalDisable = false;
      });
    // }else{
    //   window.open(this.url, "_blank");
    // }

  }


  getLink(uuid: string, product: string): Observable<any> {

    return this.http.get('/api/cancel?uuid=' + uuid,{responseType: 'text'});
  }

}
