import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { User } from './user';


@Injectable()
export class UsersService {

  private usersUrl = 'http://localhost:18334/Users';

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {

    return this.http.get(this.usersUrl)
      .map(response => response.json() as User[]);

  }

  getUser(id: number): Observable<User> {

    return this.getUsers()
      .map(users => users.find(user => user.Id === id));


  }
}
