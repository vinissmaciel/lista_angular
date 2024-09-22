import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-click-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './click-button.component.html',
  styleUrl: './click-button.component.scss',
})
export class ClickButtonComponent {
  message: string = 'Clique no botão';

  OnClick(){
    this.message = 'Botão clicado!';
  }
}
