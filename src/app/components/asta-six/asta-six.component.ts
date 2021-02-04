import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asta-six',
  templateUrl: './asta-six.component.html',
  styleUrls: ['./asta-six.component.css']
})
export class AstaSixComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit(): void {
  }


}
