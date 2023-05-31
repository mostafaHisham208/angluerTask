import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: string, discountN: number): string {
    let x=discountN;
    let y=Number(value);
    if(x!=0){
    let disN=Number(x)/100;
    let mop=y*disN;
    let sub=y-mop;

    return  sub.toString();
    }
    else {
      return value.toString();
    }

  }

}
