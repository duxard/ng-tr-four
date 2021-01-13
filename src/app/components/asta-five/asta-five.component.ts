import { Component, OnInit } from '@angular/core';

interface ICat {
  a?: (number | string)[];
  b?: Array<number|string>;
  c?: [string];
  employee?: [number, string];
}

@Component({
  selector: 'app-asta-five',
  templateUrl: './asta-five.component.html',
  styleUrls: ['./asta-five.component.css']
})
export class AstaFiveComponent implements ICat {
  a = ['sdgf', 1];
}

