import { Component, OnInit } from '@angular/core';
import {ShareEventsService} from '../../services/share-events.service';

@Component({
  selector: 'app-asta-one',
  templateUrl: './asta-one.component.html',
  styleUrls: ['./asta-one.component.css']
})
export class AstaOneComponent implements OnInit {

  constructor(
    private shareEventsService: ShareEventsService
  ) {  }

  ngOnInit(): void {
  }

  handleClick() {
    this.shareEventsService.sendEvent();
  }
}
