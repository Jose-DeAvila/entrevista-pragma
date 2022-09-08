import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    InputComponent,
    SwitchButtonComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    SwitchButtonComponent,
    ButtonComponent
  ]
})
export class AtomsModule { }
