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
  id: number;
  selectedCategory: string;

  constructor(private productRepository: ProductRepository) {}

  get products(): Product[] {
    return this.productRepository.getProducts();
  }
  get categories(): string[] {
    return this.productRepository.getCategories();
  }
  ngOnInit() {}

  changeCategory(category: string) {
    this.selectedCategory = category;
    this.products.forEach(x => {
      x.showed = false;
      if (x.category === this.selectedCategory) {
        x.showed = true;
      }
    });
  }
}
