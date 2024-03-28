import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from "../shared/services/scroll.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  constructor(private serviceScroll: ScrollService, private elementRef: ElementRef ) {
  }

  ngOnInit() {
    this.serviceScroll.currentSectionId.subscribe(id => {
      if (id) {
        const element = this.elementRef.nativeElement.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
