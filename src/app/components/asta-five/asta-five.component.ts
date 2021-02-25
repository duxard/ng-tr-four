import { Component,ComponentFactoryResolver,OnInit, ViewChild } from '@angular/core';
import { DivBoxComponent } from './div-box.component';
import { RefDirective } from './ref.directive';


@Component({
  selector: 'app-asta-five',
  templateUrl: './asta-five.component.html',
  styleUrls: ['./asta-five.component.scss']
})
export class AstaFiveComponent implements OnInit {

  @ViewChild(RefDirective, {static: false, read: RefDirective}) refDir: RefDirective;

  constructor(private cfr: ComponentFactoryResolver) {}

  showDiv() {
    const componentFactory = this.cfr.resolveComponentFactory(DivBoxComponent);
    this.refDir.vcr.clear();
    const component = this.refDir.vcr.createComponent(componentFactory);
    component.instance.close.subscribe(() => {
      this.refDir.vcr.clear();
    });
  }

  ngOnInit() {

  }

}

