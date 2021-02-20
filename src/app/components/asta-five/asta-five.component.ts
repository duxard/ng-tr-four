import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-asta-five',
  templateUrl: './asta-five.component.html',
  styleUrls: ['./asta-five.component.scss']
})
export class AstaFiveComponent implements OnInit {

  formControls = {
    title: '',
    descr: ''
  };
  ngOnInit() {

  }

  onSubmit(){
    console.log(this.formControls);
  }
}

