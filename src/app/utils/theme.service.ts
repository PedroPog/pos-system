import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeKey = 'dark-theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void{
    document.body.classList.toggle('dark-theme');
    localStorage.setItem(this.darkThemeKey,this.isDarkTheme() ? 'true' : 'false');
  }

  isDarkTheme(): boolean{
    return document.body.classList.contains('dark-theme');
  }

  private loadTheme(): void{
    const savedTheme = localStorage.getItem(this.darkThemeKey);
    if(savedTheme === 'true'){
      document.body.classList.add('dark-theme');
    }
  }
}
