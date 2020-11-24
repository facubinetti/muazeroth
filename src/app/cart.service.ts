import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Set} from './shop-list/set';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: Set[] = [];

  cart: BehaviorSubject<Set[]> = new BehaviorSubject([]);
  constructor() { }

  addToCart(set: Set) {
    let item: Set = this._cart.find((v1) => v1.name == set.name);
    if(!item) {
      this._cart.push({ ... set});
    } else {
      item.quantity += set.quantity;
    }
    this.cart.next(this._cart); // equivalente al emitt de eventos
  }
}
