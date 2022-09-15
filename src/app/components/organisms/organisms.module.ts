import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    SideMenuComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoginFormComponent,
    SideMenuComponent,
    TabsComponent
  ]
})
export class OrganismsModule { }
