import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-tst-input',
  templateUrl: './tst-input.component.html',
  styleUrls: ['./tst-input.component.scss']
})
export class TstInputComponent implements OnInit {

  @Output() emitter = new EventEmitter<any>();
  @Input() inputValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.emitter.emit('')
  }

  onChange(e) {
    console.log(e.target.value)
  }

}
