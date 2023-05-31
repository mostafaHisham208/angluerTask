import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
userlogcheck:boolean;
  constructor(private userauth:UserAuthService){
    this.userlogcheck=true;
  }
  ngOnInit(): void {

    this.userauth.userstatuschange().subscribe(status=>{
      this.userlogcheck=status;
      console.log(this.userlogcheck);




    })
  }
}
