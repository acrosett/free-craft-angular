import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Err404Component } from './err404/err404.component';
import { FaqItemComponent } from './faq/faq-item/faq-item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EulaComponent } from './eula/eula.component';
import { PrivacyComponent } from './privacy/privacy.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProgresComponent } from './progres/progres.component';
import { ProgresItemComponent } from './progres/progres-item/progres-item.component';
import {MatRippleModule} from '@angular/material/core';
import { CancelComponent } from './cancel/cancel.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { DisqusModule } from "ngx-disqus";
import { CommentsComponent } from './blog/blog-post/comments/comments.component';
import {MatIconModule} from '@angular/material/icon';
import { SeoService } from './seo.service';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FaqComponent,
    ShopComponent,
    Err404Component,
    FaqItemComponent,
    ShopItemComponent,
    EulaComponent,
    PrivacyComponent,
    ProgresComponent,
    ProgresItemComponent,
    CancelComponent,
    BlogComponent,
    BlogPostComponent,
    BlogItemComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRippleModule,
    DisqusModule.forRoot('free-craft-fr'),
    MatIconModule,
    SwiperModule
  ],
  providers: [ SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
