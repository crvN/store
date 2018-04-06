import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { RestDatasourceService } from '../services/rest-datasource.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule],
  providers: [
    ProductRepository,
    // StaticDataSource,
    CartService,
    OrderService,
    // RestDatasourceService,
    {
      provide: StaticDataSource, useClass: RestDatasourceService
    }
  ]
})
export class ModelModule {}
