import { Component, OnInit } from '@angular/core';
import { ScrollService } from "../shared/services/scroll.service";
import { ThemeService } from "../shared/services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  public currentTheme: string = 'dark';

  constructor(private serviceScroll: ScrollService, private serviceTheme: ThemeService ){
  }

  ngOnInit(): void {
    this.defineTheme(this.currentTheme)
  }

  public navigateTo(id: string): void {
    this.serviceScroll.changeSectionId(id);
  }

  public defineTheme(currentTheme: string): void {
      this.serviceTheme.changeTheme();
      this.currentTheme = currentTheme;
  }
}
