import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'products-list',
  templateUrl: 'products-list.component.html',
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  product: Product;
  selectedProduct: Product;
  constructor(private productService: ProductsService) { }

  onSelect(product: Product): void {
    //console.log(JSON.stringify(computer));
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      //console.log(JSON.stringify(computers));
    }, (error) => {
      console.log('ERROR: ' + error);
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}