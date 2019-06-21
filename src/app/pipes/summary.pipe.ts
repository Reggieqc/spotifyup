import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    if(!value){
      return null;
    } else if (value.length < 7) {
      return value;
    }   
    let actuaLimit = (limit) ? limit: 15;
    return value.substr(0, actuaLimit) + ' ...';     
  }

}
