import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { StaticDataSource } from '../../model/static.datasource';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private productRepository: ProductRepository,
    private cart: CartService,
    private route: Router
  ) {}

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPrePage;
    return this.productRepository
      .getProducts(this.selectedCategory)
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
  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize(amount: number) {
    this.productsPrePage = amount;
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.route.navigateByUrl('/cart');
  }

  // get pageCount(): number {
  //   return Math.ceil(
  //     this.productRepository.getProducts(this.selectedCategory).length /
  //       this.productsPrePage
  //   );
  // }

  get PageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts(this.selectedCategory).length /
          this.productsPrePage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }
}
