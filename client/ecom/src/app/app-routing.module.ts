import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsuggestionComponent } from 'src/app/pages/productsuggestion/productsuggestion.component';
import { HeaderComponent } from 'src/app/pages/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersectionComponent } from './footersection/footersection.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { AddtocartsComponent } from './Carts/addtocarts/addtocarts.component';

// import { CartComponent } from './products/cart/cart.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'topproduct', component: ProductsuggestionComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FootersectionComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'addtocart', component: AddtocartsComponent },
  { path: 'productsuggestion', component: ProductsuggestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
