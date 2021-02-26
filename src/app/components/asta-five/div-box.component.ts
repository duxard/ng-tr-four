import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-div-box',
  template: `
    <div>DivBoxComponent</div>
    <button (click)="close.emit(null)">Hide</button>
  `
})
export class DivBoxComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
