import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';

@Injectable()
export class ProductRepository {
  products: Product[] = [];
  categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(x => x.category)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products.filter(
      x => category === null || category === x.category
    );
  }

  getProduct(id: number): Product {
    return this.products.find(x => x.id === id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
