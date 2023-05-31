import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
isloggeduser:BehaviorSubject<boolean>;
  constructor() {
    this.isloggeduser=new BehaviorSubject<boolean>(this.userstate);
  }
  login(useremail:string, userpassword:string){
    let usertoken='123456';
    localStorage.setItem("token", usertoken);
    this.isloggeduser.next(true);
  }
  logout(){
    localStorage.removeItem("token");
    this.isloggeduser.next(false);
  }
  get userstate():boolean{
    return (localStorage.getItem('token'))?true:false;
  }
  userstatuschange():Observable<boolean>{
    return this.isloggeduser.asObservable();
  }
}

