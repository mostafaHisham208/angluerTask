import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesStyleDirective } from './directives/images-style.directive';
import { DiscountPipe } from './pipes/discount.pipe';
import { FormatPipe } from './pipes/format.pipe';
import { BuyDirective } from './directives/buy.directive';
import { ProductPComponent } from './components/product-p/product-p.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GroupRComponent } from './components/group-r/group-r.component';
import { PrdDetialsComponent } from './components/prd-detials/prd-detials.component';
import { AboutasComponent } from './components/aboutas/aboutas.component';
import { HttpClientModule} from '@angular/common/http';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ObservablesAndOperatorsComponent } from './components/observables-and-operators/observables-and-operators.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SideMenuComponent,
    ProductListComponent,
    ImagesStyleDirective,
    DiscountPipe,
    FormatPipe,
    BuyDirective,
    ProductPComponent,
    NotfoundComponent,
    GroupRComponent,
    PrdDetialsComponent,
    AboutasComponent,
    UserLoginComponent,
    ObservablesAndOperatorsComponent,
    AddproductComponent,
    UserRegistrationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
