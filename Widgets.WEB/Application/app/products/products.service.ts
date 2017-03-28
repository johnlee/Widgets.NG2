import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from './product';

@Injectable()
export class ProductsService {

  private url = 'http://localhost:18334/Products';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url)
      .map(response => response.json() as Product[]);
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .map(products => products.find(product => product.Id === id));
  }
}
