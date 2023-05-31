import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/iproduct';
import { Iuser } from '../models/iuser';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  httpOption;
  constructor(private httpcli: HttpClient, private httpoption: HttpClientModule) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
  }

  getAllProds(): Observable<IProduct[]> {
    return this.httpcli.get<IProduct[]>(`${environment.APIURL}/products`);

  }
  getProductByID(prodId: number): Observable<IProduct> {
    return this.httpcli.get<IProduct>(`${environment.APIURL}/products/${prodId}`);

  }
  //   getIDSOfProducts(): number[] {
  //     return this.httpcli.get<IProduct[]>(`${environment.APIURL}/products`).subscribe({
  //       next: (date) => {
  //         return  inddexof(date)
  //       },
  //       error: (err) => {
  //         console.log("");

  //       }
  //   });
  // }
  getProductbyCategoryID(catid: number): Observable<IProduct[]> {
    return this.httpcli.get<IProduct[]>(`${environment.APIURL}/products?CategoryID=${catid}`);

  }
  addproduct(newprod: IProduct): Observable<IProduct> {
    return this.httpcli.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(newprod), this.httpOption)
    // .pipe(
    //   retry(2),
    //   catchError((error)=>{
    //     console.log(error);
    //     return throwError(()=>new Error("error occurred"));

    //   })
    // )

  }
  updataproduct(prod: IProduct,): Observable<IProduct> {
    return this.httpcli.put<IProduct>(`${environment.APIURL}/products/${prod.id}`, prod);

  }
  deleteproduct(proid: number): Observable<unknown> {
    const url = `${environment.APIURL}/products/${proid}`; // DELETE api/heroes/42
    return this.httpcli.delete(url, this.httpOption)
      .pipe(
        retry(2),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error("error occurred"));

        })
      );

  }
  check(email: string, pass: string): Observable<Iuser> {
    return this.httpcli.get<Iuser>(`${environment.APIURL}/users?email=${email}&password=${pass}`);
  }
}
