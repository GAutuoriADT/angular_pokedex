import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: unknown, moltiplicatore: number, ...args: unknown[]): string {
    if(typeof value != 'number'){
      return 'Non è un numero'
    }
    return String(value * moltiplicatore);
  }

}
