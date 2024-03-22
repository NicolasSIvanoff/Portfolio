import {Component, ElementRef, OnInit} from '@angular/core';
import {ScrollService} from "../shared/scroll.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

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
