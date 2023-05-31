import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cateogry } from '../models/cateogry';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpcli:HttpClient) { }
  getAllProds():Observable <Cateogry[]> {
    return this.httpcli.get<Cateogry[]>(`${environment.APIURL}/categories`);
  }
  getProductByID(Cateogryid:number):Observable <Cateogry> {
    return this.httpcli.get<Cateogry>(`${environment.APIURL}/categories/${Cateogryid}`);

  }
}
