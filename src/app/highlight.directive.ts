import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class.highlighted') isHighlighted = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
  }
}