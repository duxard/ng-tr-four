import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareEventsService {

  private subject = new Subject<any>();

  constructor() {  }

  sendEvent(): void {
    this.subject.next();
  }

  recieveEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
