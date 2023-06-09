import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http={};
  constructor(private httpclient: HttpClient) {
    this.http={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  signUpUser(newUser:Iuser):Observable<Iuser>{
    return this.httpclient.post<Iuser>(`${environment.APIURL}/users`,JSON.stringify(newUser),this.http);
  }}
