import { Cateogry } from "./cateogry";

export interface Addcart {
  ID: number,
	Name :string,
	Quantity :number
	Price :string,
	Img : string,
	CateogryID : string,
  serialnum:number,
  discount:number,
  details?:string,
  Cateogry?:Cateogry,
  Cateogry1:string,

}
