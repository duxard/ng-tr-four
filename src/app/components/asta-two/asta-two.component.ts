import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ShareEventsService} from '../../services/share-events.service';

@Component({
  selector: 'app-asta-two',
  templateUrl: './asta-two.component.html',
  styleUrls: ['./asta-two.component.scss']
})
export class AstaTwoComponent implements OnInit {

  count = 0;
  private recieveEventSubscription: Subscription;

  constructor(
    private shareEventsService: ShareEventsService
  ) {
    this.recieveEventSubscription = this.shareEventsService.recieveEvent().subscribe(() => {
      this.increaseCount();
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  increaseCount() {
    ++this.count;
  }

}
