import {
  AfterViewInit,
  Component,
  ComponentRef, ContentChild,
  ElementRef,
  OnInit, QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {AstaTenComponent} from '../asta-ten/asta-ten.component';

interface Asta {
  foo(s: string, cb: () => void): Array<string>;
}

@Component({
  selector: 'app-asta-eleven',
  templateUrl: './asta-eleven.component.html',
  styleUrls: ['./asta-eleven.component.css']
})
export class AstaElevenComponent implements OnInit, AfterViewInit {

  @ViewChild(
    AstaTenComponent,
    {read: AstaTenComponent}
  ) astaTenComponent: AstaTenComponent;

  @ViewChild('tpl') tpl: TemplateRef<any>;


  showTemplate = true;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let view = this.tpl.createEmbeddedView(null);
    const elementRef = this.tpl.elementRef;
    console.log( elementRef );
  }

}
