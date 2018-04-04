import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreRoutingModule } from './store.routing';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, StoreRoutingModule],
  declarations: [
    StoreComponent,
    CartComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent]
})
export class StoreModule {}
