import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list.component';
import { ProductsDetailComponent } from './products-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: ProductsListComponent
          },
          {
            path: ':id',
            component: ProductsDetailComponent
          },
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class Routing { }

export const RoutedComponents = [ProductsComponent, ProductsListComponent, ProductsDetailComponent];
