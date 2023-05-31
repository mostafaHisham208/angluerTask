import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Branch1Component } from './branch1/branch1.component';
import { Branch2Component } from './branch2/branch2.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'branch1',pathMatch:'full'},
  {path:'branch1',component: Branch1Component,title:'brnch 1'},
  {path:'branch2',component: Branch2Component,title:'branch 2'},
];

@NgModule({
  declarations: [
    Branch1Component,
    Branch2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class BranchModule { }
