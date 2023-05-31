import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBuy]'
})
export class BuyDirective {
  // showImage: boolean = true;
  @Input("appBuy") value1 : string="0";

  constructor(private element:ElementRef) {
    this.element.nativeElement.value=`${this.value1}`;
   }
  //  @HostListener('click') func(){
  //   this.element.nativeElement.innerHTML=`<div>thank you</div>`;

   @HostListener('click') func() {
    this.element.nativeElement.value-=1;
    console.log(this.element.nativeElement.value);

    // console.log(this.showImage);
  }

}
