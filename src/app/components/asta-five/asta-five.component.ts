import { Component,ComponentFactoryResolver,HostBinding,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-asta-five',
  templateUrl: './asta-five.component.html',
  styleUrls: ['./asta-five.component.scss']
})
export class AstaFiveComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    });
    console.log(this.form);
  }

  ngOnInit() {
 
  }

}

