import { Component, OnInit } from '@angular/core';
import { fromPromise } from "rxjs/internal-compatibility";
import {filter, finalize, map, subscribeOn, tap, throttle,mapTo,takeUntil} from "rxjs/operators";
import {Observable, fromEvent, timer, interval, of, Subject, Subscription } from "rxjs";
@Component({
  selector: 'app-asta-sixteen',
  templateUrl: './asta-sixteen.component.html',
  styleUrls: ['./asta-sixteen.component.scss']
})
export class AstaSixteenComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  private done$: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.rx1();
  }

  handleClick() {
    console.log('click');
    this.subscription.unsubscribe();
    // this.done$.next();
  }

  rx1() {
    this.subscription.add(timer(0, 1000)
      .pipe(
        tap(()=> console.log('timer')),
        mapTo(-1),
        takeUntil(this.done$)
        )
      .subscribe((val:any) => console.log(val)));
  }

}
