import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ResponseStatusDto } from '../ResponseStatusDto';
import { MEMBRE_PRODUCT } from '../shopItems';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input()
  id: string;

  membreProduct = MEMBRE_PRODUCT;

  @Input()
  disable: boolean;

  internalDisable = false;

  @Input()
  title: string;

  
  @Input()
  reduction: string;

  @Input()
  info: string;

  @Input()
  subtitle: string;

  @Input()
  price: string;

  @Input()
  button: string;

  @Input()
  img: string;

  @Input()
  responseStatusDto: ResponseStatusDto;

  lastResponseStatusDto: ResponseStatusDto = null;

  url: string = null;

  @Input()
  contents: string[];

  @Input()
  product: string;

  @Input()
  member_contents: string;

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.product == this.membreProduct){
      this.internalDisable = true;
      this.getMemberPrice().subscribe(obj => {
        const price = obj;
        if(price == null || price == ''){
          this.price = "???";
        }else{
          this.internalDisable = false;
          this.price = price;
        }
      });
    }
  }

  click() {
    // if(this.lastResponseStatusDto != this.responseStatusDto || this.url == null){
      this.lastResponseStatusDto = this.responseStatusDto;
      this.url = null;
      this.internalDisable = true;
      this.getLink(this.responseStatusDto.uuid, this.product).subscribe(obj => {
        console.log(obj);
        if(obj == null){
          this.snackBar.open("error", '', {
            duration: 1000,
            verticalPosition: 'top'
          });
          this.internalDisable = false;
          return;
        }
        
        this.url = obj;
        window.open(this.url, "_blank");
        this.internalDisable = false;
      }, error => {
        console.log(error)
        this.snackBar.open(error, '', {
          duration: 1000,
          verticalPosition: 'top'
        });
        this.internalDisable = false;
      });
    // }else{
    //   window.open(this.url, "_blank");
    // }

  }


  getLink(uuid: string, product: string): Observable<any> {

    return this.http.get('/api/link?uuid=' + uuid +"&product=" + product,{responseType: 'text'});
  }

  getMemberPrice(): Observable<any> {

    return this.http.get('/api/memberprice',{responseType: 'text'});
  }


}
