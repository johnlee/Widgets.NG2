import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list.component';
import { UsersDetailComponent } from './users-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':id',
        component: UsersDetailComponent
      },
    ]
  },
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

export const RoutedComponents = [UsersComponent, UsersListComponent, UsersDetailComponent];
