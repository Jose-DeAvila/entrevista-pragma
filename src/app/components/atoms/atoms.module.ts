import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { ButtonComponent } from './button/button.component';
import { IonicModule } from '@ionic/angular';
import { TitleTagComponent } from './title-tag/title-tag.component';
import { AccountDataComponent } from './account-data/account-data.component';



@NgModule({
  declarations: [
    InputComponent,
    SwitchButtonComponent,
    ButtonComponent,
    TitleTagComponent,
    AccountDataComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InputComponent,
    SwitchButtonComponent,
    ButtonComponent,
    TitleTagComponent,
    AccountDataComponent
  ]
})
export class AtomsModule { }
