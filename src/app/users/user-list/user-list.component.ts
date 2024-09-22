import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from '../data-binding/data-binding.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, DataBindingComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit{
  users = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
  ];

  usersHttp!: {name:string,age:number}[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersHttp = this.usersService.getUsers();
  }
}
