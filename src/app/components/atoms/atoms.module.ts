import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { ButtonComponent } from './button/button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    InputComponent,
    SwitchButtonComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InputComponent,
    SwitchButtonComponent,
    ButtonComponent
  ]
})
export class AtomsModule { }
