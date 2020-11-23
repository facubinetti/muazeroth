import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuShopComponent } from './mu-shop/mu-shop.component';
import { MuazerothInicioComponent } from './muazeroth-inicio/muazeroth-inicio.component';

const routes: Routes = [
  {path: '',component:MuazerothInicioComponent},
  {path:'home',component:MuazerothInicioComponent},
  {path:'mushop',component:MuShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
