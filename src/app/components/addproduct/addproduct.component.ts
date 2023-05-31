import { ActivatedRoute, Router } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { IProduct } from 'src/app/models/iproduct';
import { Component, OnInit } from '@angular/core';
import { Cateogry } from 'src/app/models/cateogry';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  prdID: number = 0;

  catlist: Cateogry[];
  newprd: IProduct = {} as IProduct;
  prd: IProduct = {} as IProduct
  base64: any;
  constructor(private prodapi: ProductsApiService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.catlist = [
      { id: 1, name: "mobile" },
      { id: 2, name: "smartwatch" },
      { id: 3, name: "headphones" }
    ]
  }
  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = params.get('productID')
        ? Number(params.get('productID'))
        : 0;

      return this.prodapi.getProductByID(this.prdID).subscribe({
        next: (date) => {
          this.prd = date;
        },
        error: (err) => {
          console.log("ssssssss");

        }
      });

    });
  }

  addproduct() {

    this.prodapi.addproduct(this.newprd).subscribe(data => {
      alert("Product added successfully");
      this.route.navigateByUrl('/products')

    })
  }

  updateproduct() {
    this.prodapi.updataproduct(this.prd).subscribe(data => {
      alert("Product updated successfully");
      this.route.navigateByUrl('/products')

    })
  }
  getImagepath(event:any){
    const file = event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      this.base64=reader.result;
      this.newprd.Img=this.base64;
    }
  }

}
