import { Directive, ElementRef, HostListener } from "@angular/core";
import { animate, AnimationBuilder, keyframes, style } from "@angular/animations";

@Directive({
  selector: '[animationSkills]'
})

export class DirectiveSkills {

  public animationSkills: boolean = true;

  constructor(private elementRef: ElementRef, private animationBuilder: AnimationBuilder) {
  }

  @HostListener('window:scroll', ['$event']) onScrollEventSkills() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 981 && scrollPosition <= 1800 && this.animationSkills) {
      this.textAnimateIn()
    } else if (scrollPosition >= 1800 || scrollPosition <= 980 && !this.animationSkills) {
      this.textAnimateOut();
    }
  }

  public textAnimateIn(): void {
    if (this.animationSkills) {
      const animationFactory = this.animationBuilder.build([
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('2s', keyframes([
          style({transform: 'translateX(-100%)', opacity: 0}),
          style({transform: 'translateX(0)', opacity: 1})
        ]))
      ]);
      const player = animationFactory.create(this.elementRef.nativeElement);
      player.play();
      this.animationSkills = false;
    }
  }

  public textAnimateOut(): void {
    if (!this.animationSkills) {
      const animationFactory = this.animationBuilder.build([
        animate('2s', keyframes([
          style({transform: 'translateX(0)', opacity: 1}),
          style({transform: 'translateX(100%)', opacity: 0})
        ]))
      ]);
      const player = animationFactory.create(this.elementRef.nativeElement);
      player.play();
      this.animationSkills = true;
    }
  }
}
