import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from "../shared/services/scroll.service";

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss'
})
export class InitialComponent implements OnInit{

    constructor( private serviceScroll: ScrollService, private elementRef: ElementRef ) {
    }

    ngOnInit() {
      this.serviceScroll.currentSectionId.subscribe((id: string) =>{
        if(id) {
          const element = this.elementRef.nativeElement.querySelector(`#${id}`);
          if(element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      })
    }
}
