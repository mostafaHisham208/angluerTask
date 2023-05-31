import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImagesStyle]'
})
export class ImagesStyleDirective {
 @Input() raduison:string="25%";
 @Input() raduisout:string="20%";


  constructor(private ele:ElementRef) {
    // this.ele.nativeElement.style.borderRadius=`${this.raduisout}`;
    // this.ele.nativeElement.style.boxShadow = "1px 1px 1px 1px black";
    this.ele.nativeElement.style.opacity='1';

   }
ngOnChanges(): void {
  this.ele.nativeElement.style.borderRadius='50%'
  // `${this.raduisout}`;
    // this.ele.nativeElement.style.boxShadow = "1px 1px 1px 1px black";
}

  @HostListener('mouseover') func(){
    this.ele.nativeElement.style.borderRadius=`${this.raduison}`;
    // this.ele.nativeElement.style.boxShadow = "3px 3px 2px 2px black";
    this.ele.nativeElement.style.opacity='0.8';


  }
  @HostListener('mouseout') funcnone(){
    this.ele.nativeElement.style.borderRadius=`${this.raduisout}`;
    // this.ele.nativeElement.style.boxShadow = "1px 1px 1px 1px black";
    this.ele.nativeElement.style.opacity='1';

  }

}
