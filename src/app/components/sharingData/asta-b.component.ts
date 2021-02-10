import {Component, OnDestroy} from '@angular/core';
import {ShareDataService} from './share-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-asta-b',
  template: `
    <hr>
    <p>b</p>
    <button (click)="requestForDataComponentAstaA()">Click</button>
  `
})
export class AstaBComponent implements OnDestroy {

  private recieveDataResponseSubscription: Subscription;

  constructor(private shareDataService: ShareDataService) {
    this.recieveDataResponseSubscription = this.shareDataService.receiveDataResponse().subscribe((data) => {
      console.log('AstaB: event received');
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.recieveDataResponseSubscription.unsubscribe();
  }

  requestForDataComponentAstaA() {
    this.shareDataService.sendDataRequest();
  }

}
