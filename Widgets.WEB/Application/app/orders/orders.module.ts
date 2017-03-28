import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routing, RoutedComponents } from './orders.routing';

import { OrdersService } from './orders.service';

@NgModule({
  imports: [
    Routing,
    CommonModule
  ],
  declarations: [
    RoutedComponents
  ],
  providers: [
    OrdersService
  ]
})
export class OrdersModule { }