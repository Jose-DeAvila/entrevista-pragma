import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { MyProductsComponent } from './my-products/my-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    MyProductsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginComponent,
    MyProductsComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
