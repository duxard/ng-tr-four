import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private subjectRequest = new Subject<any>();
  private subjectResponse = new Subject<any>();

  constructor() {  }

  // request
  sendDataRequest(): void {
    this.subjectRequest.next();
  }

  recieveDataRequest(): Observable<any> {
    return this.subjectRequest.asObservable();
  }

  // response
  sendDataResponse(data): void {
    this.subjectResponse.next(data);
  }

  receiveDataResponse(): Observable<any> {
    return this.subjectResponse.asObservable();
  }
}
