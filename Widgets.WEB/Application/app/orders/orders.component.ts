import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Order } from './order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'orders',
  templateUrl: 'orders.component.html',
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService) { }

  getOrders(): void {
    this.ordersService.getOrders().subscribe((orders) => {
      this.orders = orders;
      //console.log(JSON.stringify(computers));
    }, (error) => {
      console.log('ERROR: ' + error);
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }

}