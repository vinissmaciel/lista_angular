import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() item!: string;
  @Output() itemClicked = new EventEmitter<string>();

  OnClick(){
    this.itemClicked.emit(this.item);
  }
}
