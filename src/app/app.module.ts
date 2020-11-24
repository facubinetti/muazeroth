import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuazerothInicioComponent } from './muazeroth-inicio/muazeroth-inicio.component';
import { MuShopComponent } from './mu-shop/mu-shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { CartShopComponent } from './cart-shop/cart-shop.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CardItemComponent } from './card-item/card-item.component';
import { MyFilterPipe } from './filtropipe.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MuazerothInicioComponent,
    MuShopComponent,
    ShopListComponent,
    CartShopComponent,
    InputIntegerComponent,
    CardItemComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
