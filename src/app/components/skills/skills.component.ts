import {Component, ElementRef, OnInit} from '@angular/core';
import {ScrollService} from "../shared/scroll.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

    constructor(private serviceScroll:ScrollService, private elementRef: ElementRef) {
    }

    ngOnInit() {
      this.serviceScroll.currentSectionId.subscribe((id: string) => {
        if(id) {
          const element = this.elementRef.nativeElement.querySelector(`#${id}`);
          if(element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      })
    }

}
