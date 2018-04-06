import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../model/order';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  orderSent = false;
  submitted = false;
  order: Order;

  constructor(private orderService: OrderService, private location: Location) {
    this.order = new Order();
  }

  ngOnInit() {
    this.order.id = Math.ceil(Math.random() * 100);
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderService.saveOrder(this.order).subscribe(order => {
        this.orderService.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  goBack() {
    this.location.back();
  }

}
