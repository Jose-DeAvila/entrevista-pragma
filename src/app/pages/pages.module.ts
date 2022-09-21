import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { MyProductsComponent } from './my-products/my-products.component';
import { IonicModule } from '@ionic/angular';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProductsComponent } from './products/products.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [
    LoginComponent,
    MyProductsComponent,
    TransactionsComponent,
    ProductsComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule
  ],
  exports: [
    LoginComponent,
    MyProductsComponent,
    TransactionsComponent,
    ProductsComponent,
    RequestsComponent
  ]
})
export class PagesModule { }
