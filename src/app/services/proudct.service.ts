import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Cateogry } from '../models/cateogry';
@Injectable({
  providedIn: 'root'
})
export class ProudctService {
  productlist: IProduct[];
  catgorylist: Cateogry[];
  newProductEvent: any;
  constructor() {
    this.catgorylist =[
        {id:1  ,name:"phone"},
        {id:2,name:"headphone"},
        {id:3,name:"smartwatch"}

         ]
    this.productlist = [
      {
         id: 1,
         Name: "s7pro",
          Price: "20", Quantity: 3, Img: "assets/mobile1.jpg", CateogryID: "1",
           discount: 0, serialnum: 1234567890123456,
           details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis nulla? Corporis, ullam ducimus. Ea ut porro ad cupiditate quas facere, error consequuntur voluptates laboriosam eum sint nostrum magni accusantium"
          , Cateogry1:"mobile"
           },
      { id: 2, Name: "radio headphone ",
      Price: "50", Quantity: 1, Img: "assets/headphone1.jpg",
      CateogryID: "3", discount: 20, serialnum: 1234567890123456,
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis nulla? Corporis, ullam ducimus. Ea ut porro ad cupiditate quas facere, error consequuntur voluptates laboriosam eum sint nostrum magni accusantium"
      ,Cateogry1:"smw"

    },
      { id: 3, Name: "lg watch",
       Price: "60", Quantity: 3,
        Img: "assets/smartwatch1.jpg", CateogryID: "2",
         discount: 20, serialnum: 1234567890123456,
         details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis nulla? Corporis, ullam ducimus. Ea ut porro ad cupiditate quas facere, error consequuntur voluptates laboriosam eum sint nostrum magni accusantium"
         ,
         Cateogry1:"hph"

        },
      { id: 4, Name: "apple watch",
       Price: "20", Quantity: 1, Img: "assets/smartwatch2.jpg",
        CateogryID: "2", discount: 0, serialnum: 1234567890123456,
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis nulla? Corporis, ullam ducimus. Ea ut porro ad cupiditate quas facere, error consequuntur voluptates laboriosam eum sint nostrum magni accusantium"
        ,
        Cateogry1:"mobile"

      },
      { id: 5, Name: "oppo f9",
       Price: "50", Quantity: 0,
        Img: "assets/mobile2.jpg", CateogryID: "1",
         discount: 15, serialnum: 1234567890123456 ,
         details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis nulla? Corporis, ullam ducimus. Ea ut porro ad cupiditate quas facere, error consequuntur voluptates laboriosam eum sint nostrum magni accusantium"
         ,
         Cateogry1:"hph"

        },
      { id: 6, Name: "sony headphone",
       Price: "60", Quantity: 3, Img: "assets/headphone2.jpg",
        CateogryID: "3", discount: 0, serialnum: 1234567890123456 ,
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis nulla? Corporis, ullam ducimus. Ea ut porro ad cupiditate quas facere, error consequuntur voluptates laboriosam eum sint nostrum magni accusantium"
        ,Cateogry1:"hph"

      },


    ];
  }

  // getproducts():IProduct[]{

  //   return this.productlist;
  // }
  //  performFilter(filterBy: string): IProduct[] {
  //   return this.productlist.filter((product: IProduct) =>
  //     product.Name.includes(filterBy)
  //   );
  // }
getcategory():Cateogry[]{
  return this.catgorylist;
}


  getAllProds(): IProduct[] {
    return this.productlist;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productlist.filter((product:IProduct) =>

     product.Name.toLocaleLowerCase().includes(filterBy)||

      product.CateogryID.toLocaleLowerCase().includes(filterBy)

      ||(Number(product.Price)<=Number(filterBy))

      // || product.Price.toString().includes(filterBy)

    );
  }

  // get product by id
  getProductByID(prodId: number): IProduct | undefined {
    return this.productlist.find((prd) => prd.id == prodId);
    }

  // return array of ids

  getIDSOfProducts(): number[] {
    return this.productlist.map(prd => prd.id);
  }

  decrease(i:number):void{
    let x=this.productlist[i-1].Quantity-=1;

      // console.log(x);

  }
  sortPrd(){
    let sortedProducts = this.productlist.sort((a,b)=>{
      if(a.Name < b.Name){
        return -1;
      }
      if(a.Name > b.Name){
        return 1;
      }
      return 0;
    });
    console.log(sortedProducts);
  ////fire event

  this.newProductEvent.emit(sortedProducts);

  }


  add(){
    let addproduct=this.productlist;
  //   let addproduct = this.productlist.sort(()=>{
     return  this.productlist;
  // ////fire event

  // this.newProductEvent.emit();
  // }
  }

}
