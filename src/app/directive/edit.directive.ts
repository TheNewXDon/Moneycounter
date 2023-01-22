import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEdit]'
})
export class EditDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.display = "none";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.display = "inline";
  }
}
