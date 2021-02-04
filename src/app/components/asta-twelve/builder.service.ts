import { Injectable } from '@angular/core';

@Injectable()
export class BuilderService {

  constructor() { }

  getMsg(): void {
    console.log('Builder service');
  }
}
