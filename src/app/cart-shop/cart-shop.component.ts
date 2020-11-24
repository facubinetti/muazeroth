import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import {Set} from '../shop-list/set'

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.scss']
})
export class CartShopComponent implements OnInit {
  
  cartList$: Observable<Set[]>;
  
  constructor(private cartlist: CartService) { 
    this.cartList$ = cartlist.cart.asObservable();
  }

  ngOnInit(): void {
  }

}
