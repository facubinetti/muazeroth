import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Set} from '../shop-list/set'

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() set: Set;
  @Input() clase:string;

  sets: Set[] =[];
  constructor(private cart: CartService) {}

  ngOnInit(): void {
  }

  addToCart(tsets): void {
    this.cart.addToCart(tsets);
    tsets.stock -= tsets.quantity;
    tsets.quantity = 0;
  }

  alertError(m: string) {
    alert(m);
  }
}
