import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Order } from './order';

@Injectable()
export class OrdersService {

  private url = 'http://localhost:18334/Orders';

  constructor(private http: Http) { }

  getOrders(): Observable<Order[]> {
    return this.http.get(this.url)
      .map(response => response.json() as Order[]);
  }
}
