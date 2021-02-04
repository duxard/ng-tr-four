import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef, Input,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {AstaSixComponent} from '../asta-six/asta-six.component';

@Component({
  selector: 'app-asta-seven',
  templateUrl: './asta-seven.component.html',
  styleUrls: ['./asta-seven.component.css']
})
export class AstaSevenComponent implements OnInit, AfterViewInit, AfterViewChecked {

  // @ViewChildren('child', {read: ElementRef})  childComp: QueryList<ElementRef>;
  //
  // @ViewChild('viewcontainer', {read: ViewContainerRef}) viewcontainer;
  // @ViewChild('t', {read: TemplateRef}) template: TemplateRef<null>;

  @ViewChild('cont', {read: ElementRef}) cont: ElementRef;
  @ViewChild(AstaSixComponent, {read: ElementRef}) astaSixComponent: ElementRef<HTMLElement>;

  @ViewChild('svDiv', {static: false}) svDiv: ElementRef;

  // tslint:disable-next-line:variable-name
  private _msg: string;
  @Input() set message(inputString) {
    this._msg = inputString;
  }

  get message(): string {
    return this._msg;
  }

  // tslint:disable-next-line:no-input-rename
  @Input() age: number;

  public inputValue = '';
  public svInit: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.svInit = true;
    // console.log(this.svDiv);
    console.log(this.svDiv);
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    const wrapper = document.getElementById('wrapper');
    const p = document.createElement('p');
    p.textContent = 'Some content inside paragraph';
    this.renderer.appendChild(wrapper, p);
    console.log(this.svDiv);
  }

  removeBtn(event) {
    this.renderer.removeChild(event.target.parentNode, event.target);
  }

  removeChild() {

    // this.viewcontainer.remove();
  }
}
