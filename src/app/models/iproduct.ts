import { Cateogry } from "./cateogry"

export interface IProduct {
   id: number,
	Name :string,
	Quantity :number
	Price :string,
	Img : string,
	CateogryID : string,
  serialnum?:number,
  discount:number,
  details?:string,
  Cateogry1?:string,
}
