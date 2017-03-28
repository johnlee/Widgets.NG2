import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routing, RoutedComponents } from './products.routing';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    Routing,
    CommonModule
  ],
  declarations: [
    RoutedComponents
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }