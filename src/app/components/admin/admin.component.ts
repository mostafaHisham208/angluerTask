import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  product:IProduct={} as IProduct
  filteredProducts: IProduct[] = [];

    // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   console.log(this.performFilter(value));
  //   this.filteredProducts2 = this.performFilter(value);
  // }

  constructor(private prdapi:ProductsApiService,private route:Router){}


  ngOnInit(): void {
    // Day3 => use service

    // this.filteredProducts=this.prdservice.getAllProds();


   this.getallpro()
  }
  // ngOnChanges() {
  //   this.prdapi.getAllProds().subscribe({
  //     next: (date) => {
  //       this.filteredProducts = date;
  //     },
  //     error: (err) => {
  //       console.log("");

  //     }

  //   })

  // }
  getallpro(){
    this.prdapi.getAllProds().subscribe({
      next: (date) => {
        this.filteredProducts = date;
      },
      error: (err) => {
        console.log("");

      }

    })
  }

  updata(prdid:number){
    this.route.navigate(['product/add']);
    this.prdapi.getProductByID(prdid).subscribe({
      next: (data)=>{
        this.product=data
        console.log(data);

      }
    });
    }
    
  prdDetails(prdID: number) {

    this.route.navigate(['/prd', prdID]);
  }
  deletepro(prodid:number){
    this.prdapi.deleteproduct(prodid).subscribe(data=>{
      confirm('Are you sure you want to delete');
      this.getallpro();
    }
    );
    console.log("deleted");

  }
}
