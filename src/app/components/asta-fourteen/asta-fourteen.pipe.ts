import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'astaFourteen'
})
export class AstaFourteenPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value.toString().toUpperCase();
  }

}
