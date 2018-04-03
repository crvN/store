import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable()
export class CartService {
  lines: CartLine[] = [];
  itemCount: number;
  cartPrice: number;

  constructor() {}

  addLine(product: Product, quantity: number = 1) {
    // tslint:disable-next-line:no-shadowed-variable
    const line = this.lines.find(line => line.product.id === product.id);

    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.updateCart();
  }

  updateQuantity(product: Product, quantity: number) {
    // tslint:disable-next-line:no-shadowed-variable
    const line = this.lines.find(line => line.product.id === product.id);
    if (line !== undefined) {
      line.quantity = +quantity;
    }
    this.updateCart();
  }

  removeLine(product: Product) {
    const index = this.lines.findIndex(line => line.product.id === product.id);
    this.lines.splice(index);
  }

  clear() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines = [];
  }

  updateCart() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(x => {
      this.cartPrice += x.product.price * x.quantity;
      this.itemCount += x.quantity;
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
