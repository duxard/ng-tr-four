import {Component, OnDestroy} from '@angular/core';
import {ShareDataService} from './share-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-asta-a',
  template: `<p>a</p>
    <button (click)="foo()">Send data</button>
  `
})
export class AstaAComponent implements OnDestroy {

  private recieveDataRequestSubscription: Subscription;

  constructor(private shareDataService: ShareDataService) {
    this.recieveDataRequestSubscription = this.shareDataService.recieveDataRequest().subscribe(() => {
      const coords = this.getCoords();
      this.shareDataService.sendDataResponse(coords);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.recieveDataRequestSubscription.unsubscribe();
  }

  getCoords(): {} {
    return { x: 1, y: 2 };
  }

  // or one can just send event to listener in another component
  foo() {
    this.shareDataService.sendDataResponse(this.getCoords());
  }

}
