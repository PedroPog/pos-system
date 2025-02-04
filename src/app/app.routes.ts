import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { BalcaoComponent } from './components/balcao/balcao.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TerminalComponent } from './components/terminal/terminal.component';

export const routes: Routes = [
  {path:'',redirectTo:'v1/home',pathMatch:'full'},
  {
    path:'v1',
    component:HomeComponent,
    children:[
      {
        path:'home',
        component:DashboardComponent
      },
      {path:'balcao',component:BalcaoComponent},
      {path:'mesa',component:MesaComponent},
      {path:'perfil',component:PerfilComponent},
      {path:'terminal',component:TerminalComponent},
      {path:'caixa',component:CaixaComponent}
    ]
  }
];
