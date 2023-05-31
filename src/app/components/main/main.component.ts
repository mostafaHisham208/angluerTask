import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';
import { TraInfo } from 'src/app/models/tra-info';
import{TraInfoInter } from 'src/app/models/tra-info-inter';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
//  track:string="hello frontend track";
//  sayhello(){
//   return "Hello"
//  }

// traClass:TraInfo=new TraInfo("mobile development","assets/img2.png",["java","naitve","flutter"]);

// interfaceClass:TraInfoInter={traName:"mobile",traNUM:10,courses:["java","naitve","flutter"] }

// ICategory:IProduct={ID:10,Name:"mobile",Quantity:5,Price:10,Img:"",CateogryID:11}

mg:Store=new Store("mall of egypt","assets/img1.jpg",["cairo","alex","sohag"])




}
