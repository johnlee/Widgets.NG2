import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'products-detail',
  templateUrl: 'products-detail.component.html'
})
export class ProductsDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }
}
