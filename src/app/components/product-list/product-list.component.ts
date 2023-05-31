import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Addcart } from 'src/app/models/addcart';
import { Cateogry } from 'src/app/models/cateogry';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { ProudctService } from 'src/app/services/proudct.service';

// var x=prompt("please enter your name : ");


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  productlist: IProduct[] = [];

  userName: string = 'hello value';
  showImage: boolean = true;
  IsPurshased: boolean = false;

  public show: boolean = true;
  public buttonName: string = 'Show';
  // date
  todayDate: Date = new Date();

  // filter
  private _listFilter: string = '';
  private _listFilter1: string = '';


  filteredProducts: IProduct[] = [];

  ctlist: Cateogry[] = [];
  addtocart: any;
  iquantity: any;
  @Input() get listcat(): string {
    return this._listFilter1;
  }
  set listcat(value: string) {
    this._listFilter1 = value;

    console.log(this.prdservice.performFilter(value));
    this.prdapi.getProductbyCategoryID(Number(value)).subscribe(data => {
         this.filteredProducts = data;
    });
    // this.ctlist = this.prdapi.getAllProds();
    // this.filteredProducts=this.prdapi.getAllProds();
  }

  @Input() get listFilterchild(): string {
    return this._listFilter;
  }
  set listFilterchild(value: string) {
    this._listFilter = value;
    console.log(this.prdservice.performFilter(value));
    // this.filteredProducts = this.prdapi.getAllProds();

    // this.filteredProducts=this.prdservice.getAllProds();
  }
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   console.log(this.performFilter(value));
  //   this.filteredProducts2 = this.performFilter(value);
  // }
  // public ClientName:string=x || "";
  @Output() newProductEvent: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();



  constructor(private prdservice: ProudctService, private router: Router, private prdapi: ProductsApiService) {

    //  this.productlist= [
    //     {ID:1,Name:"product1",Price:20,Quantity:3,Img:"assets/mobile1.jpg",CateogryID:1,discount:0,serialnum:1234567890123456},
    //     {ID:2,Name:"product2",Price:50,Quantity:1,Img:"assets/headphone1.jpg",CateogryID:2,discount:20,serialnum:1234567890123456},
    //     {ID:3,Name:"product3",Price:60,Quantity:3,Img:"assets/smartwatch1.jpg",CateogryID:3,discount:20,serialnum:1234567890123456},
    //     {ID:4,Name:"product4",Price:20,Quantity:1,Img:"assets/smartwatch2.jpg",CateogryID:1,discount:0,serialnum:1234567890123456},
    //     {ID:5,Name:"product5",Price:50,Quantity:0,Img:"assets/mobile2.jpg",CateogryID:2,discount:15,serialnum:1234567890123456},
    //     {ID:6,Name:"product6",Price:60,Quantity:3,Img:"assets/headphone2.jpg",CateogryID:3,discount:0,serialnum:1234567890123456},


    //  ];
  }
  decrease(i: number): void {
    // let x=this.productlist[i-1].Quantity-=1;
    this.prdservice.decrease(i);
    // let x= this.prdservice.productlist[i-1].Quantity-=1;

    // console.log(x);

  }
  ngOnChanges(): void {
    // this.prdapi.getProductbyCategoryID(value).subscribe({
    //   next: (date) => {
    //     this.filteredProducts = date;
    //   },
    //   error: (err) => {
    //     console.log("");

    //   }

    // })
    // this.listFilterchild;
  }
  ngOnInit(): void {
    // Day3 => use service

    // this.filteredProducts=this.prdservice.getAllProds();


    this.prdapi.getAllProds().subscribe({
      next: (date) => {
        this.filteredProducts = date;
      },
      error: (err) => {
        console.log("");

      }

    })
  }

  ////without services
  // ngOnInit(): void {
  //   // this.filteredProducts = this.productlist;
  // }

  toggleImage(): void {
    this.showImage = !this.showImage;
    this.IsPurshased = !this.IsPurshased;

  }
  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  // performFilter(filterBy: string): IProduct[] {
  //   return this.productlist.filter((product: IProduct) =>
  //     product.Name.includes(filterBy)
  //   );
  // }

  //  prddetials:
  prdDetails(prdID: number) {

    this.router.navigate(['/prd', prdID]);
  }

  sortPrd() {
    // this.prdservice.sortPrd();
    let sortedProducts = this.prdservice.productlist.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      return 0;
    });
    // console.log(sortedProducts);
    //fire event

    this.newProductEvent.emit(sortedProducts);
  }
  @Output() senditem: EventEmitter<Addcart[]> = new EventEmitter<Addcart[]>();
  @Output() sendquantity: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();

  onadd(item: IProduct) {
    if (this.addtocart.includes(item)) {
      this.iquantity.map((i: { ID: number; Quantity: number; }) => {
        if (item.id === i.ID) {
          i.Quantity++;
        }
      })
    }
    else {
      this.addtocart.push(item);
      let opj = {
        ID: item.id,
        Quantity: 1
      }
      this.iquantity.push(opj);
    }

    this.sendquantity.emit(this.iquantity);
    this.senditem.emit(this.addtocart);

  }

}
