import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appAstaPainter]'
})
export class AstaPainterDirective implements OnInit {

  @Input('appAstaPainter') appHighlight;

  constructor( private element: ElementRef ) { }

  ngOnInit() {
    // this.element.nativeElement.style.color = this.appHighlight;
    this.element.nativeElement.setAttribute(this.appHighlight, '');
  }

}

