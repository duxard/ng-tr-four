import { Component, OnInit } from '@angular/core';

interface ICat {
  a?: (number | string)[];
  b?: Array<number|string>;

  mew(arr?: Array<{}>);
}

@Component({
  selector: 'app-asta-five',
  templateUrl: './asta-five.component.html',
  styleUrls: ['./asta-five.component.css']
})
export class AstaFiveComponent implements OnInit, ICat {
  a = ['sdgf', 1];
  b = ['sdgf', 1];
  constructor() { }

  ngOnInit(): void {
  }

    mew() {
  }
}

