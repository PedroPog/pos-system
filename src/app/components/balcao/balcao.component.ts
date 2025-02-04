import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-balcao',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './balcao.component.html',
  styleUrl: './balcao.component.scss'
})
export class BalcaoComponent {

  valorTotal:String= "4020.00";

}
