import { Component } from '@angular/core';

import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  template: `<router-outlet></router-outlet>`,
  providers: [ProductsService]
})
export class ProductsComponent { }