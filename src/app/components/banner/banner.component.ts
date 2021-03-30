import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <h1>{{title}}</h1>
    <p>
      <span>banner works!</span>
      <span class="inner">lorem</span>
    </p>
    <h5>some header</h5>

    <div>
      <h2><span class="hero">{{hero.name | titlecase}}</span> details</h2>
      <input id="name" [(ngModel)]="hero.name" placeholder="name" />
    </div>

  `,
  styles: ['h1 { color: green; font-size: 350%}']
})
export class BannerComponent implements OnInit {
  title = 'Banner';

  hero = {
    name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
