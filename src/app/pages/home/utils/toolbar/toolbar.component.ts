import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../../utils/theme.service';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';



@Component({
  selector: 'utils-toolbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  modoInterface:boolean = this.themeService.isDarkTheme();
  conexao:boolean =true;
  notificaoNumber:number=0;

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.modoInterface = this.themeService.isDarkTheme();
  }

}
