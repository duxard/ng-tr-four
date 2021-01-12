import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appPainter]'
})
export class PainterDirective {

  @HostBinding('style.backgroundColor') bgCol = 'yellow';

  constructor() { }

  changeBgCol() {
    this.bgCol = (this.bgCol === 'yellow' ? 'blue' : 'yellow');
  }

}
