import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PipeTestPipe } from "../pipes/pipe-test.pipe";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [PipeTestPipe]
})
export class FilterComponent implements OnInit{
  users = [
    { name: 'Carlos', age: 25 },
    { name: 'Ana', age: 32 },
    { name: 'Beatriz', age: 21 },
  ];

  filteredUsers!: {name: string, age: number}[];

  constructor(private filterPipe: PipeTestPipe){ }

  OnInput(event: any){
    this.filteredUsers = this.filterPipe.transform(event.target.value, this.users);
  }

  ngOnInit(): void {
    this.filteredUsers = this.filterPipe.transform('', this.users);
  }
}
