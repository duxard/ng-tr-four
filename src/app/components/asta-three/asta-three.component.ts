import {Component, OnInit, ViewChild} from '@angular/core';
import {PainterDirective} from '../../directives/painter.directive';
import {Subscription} from 'rxjs';
import {ShareEventsService} from '../../services/share-events.service';

@Component({
  selector: 'app-asta-three',
  templateUrl: './asta-three.component.html',
  styleUrls: ['./asta-three.component.css']
})
export class AstaThreeComponent implements OnInit {

  @ViewChild(PainterDirective) painterDirective;
  private recieveEventSubscription: Subscription;

  constructor(
    private shareEventsService: ShareEventsService
  ) {
    this.recieveEventSubscription = this.shareEventsService.recieveEvent().subscribe({
      next: () => this.changeBgCol(),
      error: (error) => console.log(error)
    });
  }

  ngOnInit(): void {
  }

  changeBgCol() {
    this.painterDirective.changeBgCol();
  }

}
