import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-asta-five',
  templateUrl: './asta-five.component.html',
  styleUrls: ['./asta-five.component.scss']
})
export class AstaFiveComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      const formData = {...this.form.value}

      console.log('Form Data:', formData)
    }
  }
}

