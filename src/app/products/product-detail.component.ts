import { Component } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    // const id =  this.router.snapshot.params['id'];
    // const id = +this.router.snapshot.paramMap.get('id');

    const resolvedData =  router.snapshot.data['resolvedData'];
    this.errorMessage =  resolvedData.error;

    this.onProductRetrieved(resolvedData.product);
    // this.router.paramMap.subscribe(data => {
    //   this.getProduct(+data.get('id'));
    // });
  }

  // getProduct(id: number) {
  //   this.productService
  //     .getProduct(id)
  //     .subscribe(
  //       product => this.onProductRetrieved(product),
  //       error => (this.errorMessage = <any>error)
  //     );
  // }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
