import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Order } from '../model/order';
import { StaticDataSource } from '../model/static.datasource';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  order: Order;
  orders: Order[];

  constructor(
    private cart: CartService,
    private dataSource: StaticDataSource
  ) {
    this.order = new Order();
  }

  clear() {
    this.order.id = null;
    this.order.name = this.order.address = this.order.city = null;
    this.order.state = this.order.zip = this.order.country = null;
    this.order.shipped = false;

    this.cart.clear();
  }

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
