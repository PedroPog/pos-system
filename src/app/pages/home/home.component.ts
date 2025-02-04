import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from "./utils/toolbar/toolbar.component";
import { SidebarComponent } from "./utils/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    SidebarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
