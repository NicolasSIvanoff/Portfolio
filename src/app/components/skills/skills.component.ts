import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from "../shared/services/scroll.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  public carrossel1: { src: string, alt: string, description: string }[] = [
    { src: "./assets/images/carousel-images/angular.webp", alt: "Angular logo", description: "Angular Framework" },
    { src: "./assets/images/carousel-images/css-3.webp", alt: "CSS-3 logo", description: "CSS3 Styling" },
    { src: "./assets/images/carousel-images/html-5.webp", alt: "HTML-5 logo", description: "HTML5 Markup Language" },
    { src: "./assets/images/carousel-images/bootstrap.webp", alt: "Bootstrap logo", description: "Bootstrap CSS Framework" },
    { src: "./assets/images/carousel-images/bard.webp", alt: "Bard logo", description: "Bard Framework" },
    { src: "./assets/images/carousel-images/typescript.webp", alt: "Typescript logo", description: "Typescript Language" },
    { src: "./assets/images/carousel-images/chat-gpt.webp", alt: "Chat-gpt logo", description: "Chat-gpt Logo" },
    { src: "./assets/images/carousel-images/cli.webp", alt: "Angular CLI logo", description: "Angular CLI" }
  ];
    public carrossel2: { src: string, alt: string, description: string }[] = [
    { src: "./assets/images/carousel-images/github.webp", alt: "Github logo", description: "Github Logo" },
    { src: "./assets/images/carousel-images/material.webp", alt: "Angular Material logo", description: "Angular Material" },
    { src: "./assets/images/carousel-images/lighthouse.webp", alt: "Lighthouse logo", description: "Lighthouse Logo" },
    { src: "./assets/images/carousel-images/node-js.webp", alt: "Node.js logo", description: "Node.js" },
    { src: "./assets/images/carousel-images/rxjs.webp", alt: "RxJS logo", description: "RxJS" },
    { src: "./assets/images/carousel-images/sass.webp", alt: "Sass logo", description: "Sass" },
    { src: "./assets/images/carousel-images/npm.webp", alt: "Npm logo", description: "npm (Node Package Manager)" },
    { src: "./assets/images/carousel-images/virtual-studio-code.webp", alt: "VS Code logo", description: "Visual Studio Code" }
  ];

  constructor(private serviceScroll:ScrollService, private elementRef: ElementRef) {
    }

  ngOnInit(): void {
    this.serviceScroll.currentSectionId.subscribe((id: string) => {
      if (id) {
        const element = this.elementRef.nativeElement.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }
    })
  }
}
