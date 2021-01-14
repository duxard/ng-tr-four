import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asta-six',
  templateUrl: './asta-six.component.html',
  styleUrls: ['./asta-six.component.css']
})
export class AstaSixComponent implements OnInit {

  checked1 = true;
  checked2 = false;

  constructor() { }

  ngOnInit(): void {
  }

  radioChange(e) {
    this.checked1= !this.checked1;
    this.checked2= !this.checked2;
  }

}
