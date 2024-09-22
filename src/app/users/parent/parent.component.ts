import { Component, EventEmitter } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  selectedItem!: string;
  items = ['Item1', 'Item2', 'Item3'];

  OnClick(item: string){
    this.selectedItem = item;
  }
}
