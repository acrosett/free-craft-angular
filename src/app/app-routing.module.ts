import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FaqComponent } from './faq/faq.component';
import { Err404Component } from './err404/err404.component';
import { EulaComponent } from './eula/eula.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProgresComponent } from './progres/progres.component';
import { CancelComponent } from './cancel/cancel.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'home'} },
  { path: 'shop', component: ShopComponent, data: {animation: 'shop'}  },
  { path: 'faq', component: FaqComponent, data: {animation: 'faq'}  },
  { path: 'blog', component: BlogComponent, data: {animation: 'blog'} },
  { path: 'blog/:article', component: BlogComponent, data: {animation: 'blog'} },
  { path: 'cancel', component: CancelComponent },
  { path: 'eula', component: EulaComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' , data: {animation: 'home'} }, // redirect to `first-component`
  { path: '**', component: Err404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
