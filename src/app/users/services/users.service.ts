import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  users: {name:string,age:number}[]= [];

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get<{name:string,age:number}[]>('assets/users.json').subscribe(users => {this.users = users;});
    return this.users;
  }
}
