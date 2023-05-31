import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProudctService } from 'src/app/services/proudct.service';
@Component({
  selector: 'app-product-p',
  templateUrl: './product-p.component.html',
  styleUrls: ['./product-p.component.scss']
})
export class ProductPComponent {
   listFilter:string='';
   prds:IProduct[]=[];
// constructor(private prdservice:ProudctService){}
   sortProducts(allPrdsAfterSort:any):void{

    this.prds.push(allPrdsAfterSort);
    // console.log(allPrdsAfterSort);

  }
  // add():void{
  //    if(this.prdservice.)
  // }

}
