import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      this.vc.createEmbeddedView(this.templateRef);
    } else {
      this.vc.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, 
              private vc: ViewContainerRef) { }
}
