import {Component, ElementRef} from '@angular/core';
import {ScrollService} from "../shared/scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private serviceScroll: ScrollService ){}

  public navigateTo(id: string) {
    this.serviceScroll.changeSectionId(id);
  }
}
