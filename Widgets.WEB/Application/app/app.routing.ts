import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
