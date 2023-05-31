import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutasComponent } from './components/aboutas/aboutas.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupRComponent } from './components/group-r/group-r.component';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ObservablesAndOperatorsComponent } from './components/observables-and-operators/observables-and-operators.component';
import { PrdDetialsComponent } from './components/prd-detials/prd-detials.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPComponent } from './components/product-p/product-p.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { userGuard } from './guards/user.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: '',redirectTo: '/main',pathMatch:'full'},
  {path: 'main', component:MainComponent,title: 'Main'},
  {path: 'products', component:ProductListComponent,title: 'Productslist',canActivate:[userGuard]},
  {path:'aboutas',component:AboutasComponent,title: 'Aboutas'},

  {path: 'product/add', component:AddproductComponent,title: 'add product',canActivate:[userGuard]},

  {path: 'regist', component:UserRegistrationComponent,title: 'registration'},

  {path: 'login/admin', component:AdminComponent,title: 'admin dashbord' ,canActivate:[userGuard]},



  {path: 'productsparent', component:ProductPComponent,title: 'Productsparent'},
  {
    path: 'prd/:productID',
    component: PrdDetialsComponent,
    title: 'Product Details Page',
  },
  // {path:'obs',component:ObservablesAndOperatorsComponent,title:"Observable and operators"},
  // {path:'templateDriven',component:UserTemplateFormComponent,title:"Template Driven Form"},
  // {path:'reactiveform',component:UserReactiveFormComponent,title:"Reactive Form"},

  {
    path: 'branch',
    loadChildren: () =>
      import(
        'src/app/components/branch/branch.module'
      ).then((m) => m.BranchModule),
  },
  {
    path:'login',component:UserLoginComponent,title:"login"}
 ,{
    path:'logout',component:UserLoginComponent,title:"logout"
  },
  {path: '**', component:NotfoundComponent,title:'notfound'},
  // {
  //   path: 'path',
  //   loadChildren: () => import('lazy-path').then(m => m.lazy-module)
  // },
  // {path:'group',component:GroupRComponent,children:[
  //     {path: '',redirectTo: '/main',pathMatch:'full'},
  // {path: 'main', component:MainComponent,title: 'Main'},
  // {path: 'products', component:ProductListComponent,title: 'Productslist'},
  // {path: 'productsparent', component:ProductPComponent,title: 'Productsparent'},
  // {path: '**', component:NotfoundComponent,title:'notfound'},

  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
