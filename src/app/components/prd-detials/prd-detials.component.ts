import { ProductsApiService } from 'src/app/services/products-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProudctService } from 'src/app/services/proudct.service';

@Component({
  selector: 'app-prd-detials',
  templateUrl: './prd-detials.component.html',
  styleUrls: ['./prd-detials.component.scss']
})
//PrdDetialsComponent
export class PrdDetialsComponent implements OnInit {
  prdID: number = 0;
  // product!:Iproduct;//! => non null assertion operator => 12
  // product:Iproduct = {} as Iproduct;
  product: IProduct | undefined = undefined;
  // product:Iproduct | null = null;

  // product ids
  productIDSArr: number[] = [];

  //
  returnedCurrentIndex: number = 0;
  constructor(
    private prdService: ProductsApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    // convert string to number => parseInt() ,Number(), + , property as number
    //    this.prdID= (this.activatedRoute.snapshot.paramMap.get('productID'))?Number(this.activatedRoute.snapshot.paramMap.get('productID')):0;
    //   //  console.log(this.prdID);
    //  let resultOfFoundedPrd = this.prdService.getProductByID(this.prdID);
    //     if (resultOfFoundedPrd) {
    //       this.product = resultOfFoundedPrd;
    //     } else {
    //       alert('Product not found');
    //     }
    // this.prdService.getProductByID(this.params.id).subscribe({
    //   next: (date) => {
    //     this.product = date;
    //   },
    //   error: (err) => {
    //     console.log("");

    //   }

    // })

    //  console.log(this.product);

    // this.productIDSArr = this.prdService.getIDSOfProducts();
    // console.log(this.productIDSArr);


    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = params.get('productID')
        ? Number(params.get('productID'))
        : 0;

      return this.prdService.getProductByID(this.prdID).subscribe({
        next: (date) => {
          this.product = date;
        },
        error: (err) => {
          console.log("");

        }
      });
      // if(resultOfFoundedPrd) {
      //     this.product = resultOfFoundedPrd;
      //   } else {
      //     alert('Product not found');
      //   }
      });
    }

  BackToHome() {
      this.router.navigate(['products']);
    }
  prevFunc() {

      this.returnedCurrentIndex = this.productIDSArr.indexOf(this.prdID);
      // this.returnedCurrentIndex= this.productIDSArr.findIndex(prd=>prd==this.prdID);
      // console.log(this.returnedCurrentIndex);
      this.router.navigate(["/prd", this.productIDSArr[--this.returnedCurrentIndex]]);

    }
  nextFunc() {
      this.returnedCurrentIndex = this.productIDSArr.indexOf(this.prdID);
      this.router.navigate(["/prd", this.productIDSArr[++this.returnedCurrentIndex]]);
    }
}
