import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ComponentFactoryResolver, Inject, Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {StunnerComponent} from './stunner.component';
import {USER_TOKEN} from './userToken';
import {BuilderService} from './builder.service';
import { AstaTwelveChildComponent } from './asta-twelve-child.component';


@Component({
  selector: 'app-asta-twelve',
  styleUrls: ['./asta-twelve.component.css'],
  template: `
    <span>I am first span</span>
    <ng-container [ngTemplateOutlet]="tpl"></ng-container>
    <span>I am last span</span>
    <ng-template #tpl>
      <span>I am span in template</span>
    </ng-template>
    <ng-container *ngComponentOutlet="ast"></ng-container>
    <ng-container *ngComponentOutlet="ast"></ng-container>
    <ng-container *ngComponentOutlet="ast"></ng-container>
  `,
  providers: [{provide: BuilderService}]
})
export class AstaTwelveComponent implements  OnInit {

  ast = AstaTwelveChildComponent;

  private bs;

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,

    private injector: Injector
  ) {
    this.bs = injector.get(BuilderService);
    this.bs.getMsg();
  }



  ngOnInit(): void {
    // const componentFactory = this.cfr.resolveComponentFactory(StunnerComponent);
    // this.vcr.createComponent(componentFactory);

  }

}


//
// {fromContext: 'John'}
// @ViewChild('t', { read: TemplateRef }) t: TemplateRef<any>;

// <ng-container #vc></ng-container>
