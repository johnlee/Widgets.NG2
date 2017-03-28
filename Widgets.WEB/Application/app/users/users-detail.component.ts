import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'users-detail',
  templateUrl: 'users-detail.component.html'
})
export class UsersDetailComponent implements OnInit {

    @Input() user: User;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
          .switchMap((params: Params) => this.usersService.getUser(+params['id']))
            .subscribe(user => this.user = user);
    }
}
