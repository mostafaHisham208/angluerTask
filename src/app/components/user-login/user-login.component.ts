import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: boolean = false;
  //  useremail:string;
  constructor(private userauth: UserAuthService, private userservice: ProductsApiService, private route: Router) { }
  ngOnInit(): void {
    this.user = this.userauth.userstate;

  }
  loginfun() {
    this.userauth.login("test@gmail.com", "123456");
    this.user = this.userauth.userstate;
  }
  logoutfun() {
    this.userauth.logout();
    this.user = this.userauth.userstate;

  }
  checkuser() {
    // this.userservice.check()
  }

  adminbord() {
    this.userauth.login("test@gmail.com", "123456");
    this.user = this.userauth.userstate;
    // alert("Product added successfully");
    this.route.navigateByUrl('login/admin');
  }
}
