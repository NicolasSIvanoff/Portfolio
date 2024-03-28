import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  public currentTheme: string = 'light';

  public changeTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    const themeToRemove = this.currentTheme === 'light' ? 'dark-theme' : 'light-theme';
    document.body.classList.remove(themeToRemove);
    const newThemeClass = `${this.currentTheme}-theme`;
    document.body.classList.add(newThemeClass);
  }
}
