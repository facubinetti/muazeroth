import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuazerothInicioComponent } from './muazeroth-inicio/muazeroth-inicio.component';
import { MuShopComponent } from './mu-shop/mu-shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { CartShopComponent } from './cart-shop/cart-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    MuazerothInicioComponent,
    MuShopComponent,
    ShopListComponent,
    CartShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
