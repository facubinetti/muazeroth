import { NumberSymbol } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
  @Input() 
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  AlertError: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  upQuantity(): void {
    if(this.max != 0){
      if(this.quantity < this.max) {
        this.quantity++;
        this.quantityChange.emit(this.quantity);
      }else{
        this.AlertError.emit("No hay stock o se alcanzo el maximo disponible");
      }
    }
}

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event): void {
    if (event.key != NumberSymbol){
        this.AlertError.emit("Solo se pueden ingresar numeros");
        this.quantity=0;
        }
    this.quantityChange.emit(this.quantity);
  }

}
