import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-div-box',
  template: `
    <div>DivBoxComponent {{title}}</div>
    <button (click)="close.emit(null)">Hide</button>
  `
})
export class DivBoxComponent implements OnInit {

  @Input() title = '';
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
