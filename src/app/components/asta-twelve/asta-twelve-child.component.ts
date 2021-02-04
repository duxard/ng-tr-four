import { Component, OnInit } from '@angular/core';
import {BuilderService} from './builder.service';

@Component({
  selector: 'app-asta-twelve-child',
  template: `<p>asta twelve child</p>`
})
export class AstaTwelveChildComponent implements OnInit {

  constructor(private bs: BuilderService) { }

  ngOnInit(): void {
    this.bs.getMsg();
  }

}
