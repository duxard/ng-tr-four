import {AfterViewChecked, AfterViewInit, Component, ContentChild, Directive, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PaneDirective} from './pane.directive';

interface Person {
  name1: string;
  age: number;
  location: string;
}

type K1 = keyof Person;
//////////////////////////////

@Component({
  selector: 'app-asta-fourteen',
  template: `
    <h3>Title</h3>
    <p appPane>Some info</p>
    <hr>
    <div #box>
      <p>{{'lorem ipsum' | astaFourteen}} </p>
      <input type="text">
      <p>inside div</p>
    </div>
    <ng-content></ng-content>
  `
})
export class AstaFourteenComponent implements OnInit, AfterViewInit, AfterViewChecked  {
  @ViewChild('box', {read: ElementRef}) box: ElementRef<HTMLElement>;
  @ContentChild('c') c: ElementRef;
  @ContentChild(PaneDirective) pane: PaneDirective;

  asta !: number;

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.box.nativeElement);
    console.log(this.pane);
  }
  ngAfterViewChecked() {

  }
}




