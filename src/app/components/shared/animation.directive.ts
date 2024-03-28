import { Directive, ElementRef, HostListener } from "@angular/core";
import { animate, AnimationBuilder, keyframes, style } from "@angular/animations";

@Directive({
  selector: '[animationDirective]'
})
export class AnimationDirective {
  public animation = true;

  constructor(public elementRef: ElementRef, public animationBuilder: AnimationBuilder) {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollPosition >= componentPosition + windowHeight - 400 && scrollPosition <= componentPosition + this.elementRef.nativeElement.offsetHeight + windowHeight - 400) {
      this.animateIn();
    } else if (scrollPosition >= componentPosition - 100 && scrollPosition <= componentPosition + this.elementRef.nativeElement.offsetHeight || scrollPosition >= componentPosition + 1000) {
      this.animateOut();
    } else if (scrollPosition <= componentPosition + 1500) {
      this.animateIn();
    }
  }

  public animateIn(): void {
    if (this.animation) {
      const animationFactory = this.animationBuilder.build([
        style({transform: 'translateX(-50%)', opacity: 0}),
        animate('1.5s', keyframes([
          style({transform: 'translateX(-20%)', opacity: 0}),
          style({transform: 'translateX(0)', opacity: 1})
        ]))
      ]);
      const player = animationFactory.create(this.elementRef.nativeElement);
      player.play();
      this.animation = false;
    }
  }

  public animateOut(): void {
    if (!this.animation) {
      const animationFactory = this.animationBuilder.build([
        animate('2s', keyframes([
          style({transform: 'translateX(0)', opacity: 1}),
          style({transform: 'translateX(100%)', opacity: 0})
        ]))
      ]);
      const player = animationFactory.create(this.elementRef.nativeElement);
      player.play();
      this.animation = true;
    }
  }
}
