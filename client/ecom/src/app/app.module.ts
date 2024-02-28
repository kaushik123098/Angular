import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './pages/header/header.component';
import { ProductsuggestionComponent } from './pages/productsuggestion/productsuggestion.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersectionComponent } from './footersection/footersection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollectionComponent } from './pages/collection/collection.component';
import { AddtocartsComponent } from './Carts/addtocarts/addtocarts.component';
import { UserloginComponent } from './login-register/userlogin/userlogin.component';
import { UserregisterComponent } from './login-register/userregister/userregister.component';
import { AdminloginComponent } from './login-register/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsuggestionComponent,
    NavbarComponent,
    FootersectionComponent,
    CollectionComponent,
    AddtocartsComponent,
    UserloginComponent,
    UserregisterComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
