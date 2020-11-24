import { Component, Input, OnInit } from '@angular/core';
import {Set} from '../mu-shop/set'

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() set: Set;
  @Input() clase:string;
  constructor() { }

  ngOnInit(): void {
  }

}
