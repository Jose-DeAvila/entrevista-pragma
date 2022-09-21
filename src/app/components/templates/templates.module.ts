import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { OrganismsModule } from '../organisms/organisms.module';

@NgModule({
  declarations: [
    LoginTemplateComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrganismsModule
  ],
  exports: [
    LoginTemplateComponent,
    DashboardComponent
  ]
})
export class TemplatesModule { }
