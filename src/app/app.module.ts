import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:OnlineshoppingComponent
  },
  {
    path:"categories",component:CategoriesComponent
  },
  {
    path:"wishlist",component:WishlistComponent
  },
  {
    path:"bag",component:BagComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    OnlineshoppingComponent,
    NavbarComponent,
    CategoriesComponent,
    WishlistComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
