import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  showMessage: boolean = false;

  OnClick(){
    if(this.showMessage){
      this.showMessage = false;
    }else{
      this.showMessage = true;
    }
  }
}
