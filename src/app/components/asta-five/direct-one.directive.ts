import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectOne]'
})
export class DirectOneDirective {
  @HostBinding('style.color') col: string = 'red';
  @HostListener('mouseover') onMouseover() {
    this.el.nativeElement.style.fontWeight = this.fontWeight;
  }
  @Input() fontWeight = 'normal';

  constructor(private el:ElementRef) {}

}
