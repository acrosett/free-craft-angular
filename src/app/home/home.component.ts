import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostListener } from '@angular/core';
// import Swiper styles
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core';
import { SeoService } from '../seo.service';



SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  infoServeur: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private seo: SeoService) { }

  @ViewChild('wrapper') wrapper: ElementRef<HTMLElement>;

  
 
  ngOnInit(): void {
    this.getInfoServeur().subscribe( data => {
      this.infoServeur = data;
      this.infoServeur.players.online =  (this.infoServeur.players.online + '').replace(/</g, "&lt;").replace(/>/g, "&gt;");
      this.infoServeur.players.max =  (this.infoServeur.players.max + '').replace(/</g, "&lt;").replace(/>/g, "&gt;");
    });
    this.seo.updateTitle("Free-craft - Serveur Minecraft");
  }

  onSwiper(swiper) {
    //console.log(swiper);
  }
  onSlideChange() {
    //console.log('slide change');
  }

  ngAfterViewInit(): void {
    const navbarHeigth = window.screen.width * 138/1920;
    const carouselHeigth = window.screen.height - navbarHeigth;
    this.wrapper.nativeElement.style.height = carouselHeigth*0.715+"px";
  
  }

  @HostListener('window:resize', ['$event']) // for window scroll events
  onScroll(event) {
    const navbarHeigth = window.screen.width * 138/1920;
    const carouselHeigth = window.screen.height - navbarHeigth;
    this.wrapper.nativeElement.style.height = carouselHeigth*0.715+"px";
  }

  getInfoServeur(): Observable<any> {
    return this.http.get<any>('/api/status')
  }

  copyMessage(message) {

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'free-craft.fr';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.snackBar.open(message, '', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

}

