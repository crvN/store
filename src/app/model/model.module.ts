import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@NgModule({
  providers: [ProductRepository, StaticDataSource, CartService, OrderService]
})
export class ModelModule {}
