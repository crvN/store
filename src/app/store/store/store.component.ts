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
  selectedCategory = null;
  productsPrePage = 4;
  selectedPage = 1;

  constructor(private productRepository: ProductRepository) {}

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPrePage;
    return this.productRepository
      .getProducts()
      .slice(pageIndex, pageIndex + this.productsPrePage);
  }
  get categories(): string[] {
    return this.productRepository.getCategories();
  }
  ngOnInit() {}

  changeCategory(category?: string) {
    this.selectedCategory = category;
    this.products.forEach(x => {
      x.showed = false;
      if (!category) {
        x.showed = true;
      }
      if (x.category === this.selectedCategory) {
        x.showed = true;
      }
    });
  }
}
