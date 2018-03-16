import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { StaticDataSource } from '../../model/static.datasource';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  // products: Product[] = [];
  id: number;
  constructor(private productRepository: ProductRepository) {}
  get products(): Product[] {
    return this.productRepository.getProducts();
  }
  get categories(): string[] {
    return this.productRepository.getCategories();
  }
  ngOnInit() {}
}
