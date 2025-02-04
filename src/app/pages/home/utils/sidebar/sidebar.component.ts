import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'utils-sidebar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  deferredPrompt: any;
  isPwaInstalled = false;

  constructor() {
    this.checkIfPwaInstalled();
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault();
    this.deferredPrompt = event;
  }

  checkIfPwaInstalled() {
    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
      this.isPwaInstalled = true;
    }
  }

  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação do PWA.');
        } else {
          console.log('Usuário recusou a instalação do PWA.');
        }
        this.deferredPrompt = null;
      });
    }
  }

}
