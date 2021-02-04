import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShareDataService} from './share-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-asta-a',
  template: `<p>a</p>`
})
export class AstaAComponent implements OnInit, OnDestroy {

  private recieveDataRequestSubscription: Subscription;

  constructor(private shareDataService: ShareDataService) {
    this.recieveDataRequestSubscription = this.shareDataService.recieveDataRequest().subscribe(() => {
      const coords = this.getCoords();
      this.shareDataService.sendDataResponse(coords);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.recieveDataRequestSubscription.unsubscribe();
  }

  getCoords(): {} {
    console.log('get coords');
    return { x: 1, y: 2 };
  }

}
