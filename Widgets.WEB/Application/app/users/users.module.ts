import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routing, RoutedComponents } from './users.routing';
import { UsersService } from './users.service';

@NgModule({
  imports: [
      Routing,
      CommonModule
  ],
  declarations: [
      RoutedComponents,
      ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }