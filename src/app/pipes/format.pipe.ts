import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any): string {
    var arr = String(value).split("").map((value)=>{
      return (value)});
     arr.splice(4,0,'-')
     arr.splice(9,0,'-')
     arr.splice(14,0,'-')
    let form= arr.join("");
    return form;
  }

}
