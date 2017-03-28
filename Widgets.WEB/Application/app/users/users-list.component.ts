import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UsersService } from './users.service';
import { User } from './user';

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  providers: [UsersService]
})
export class UsersListComponent implements OnInit {

  users: User[];
  user: User;
  selectedUser: User;
  constructor(private userService: UsersService) { }

  onSelect(user: User): void {
      //console.log(JSON.stringify(user));
      this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      //console.log(JSON.stringify(users));
    }, (error) => {
      console.log('ERROR: ' + error);
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}