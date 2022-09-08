import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastController } from '@ionic/angular';
import { LoginResponse } from 'src/app/interfaces/auth.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  documentNumber: string;
  password: string;
  wantsToSaveCredentials: boolean;

  constructor(private auth: AuthService, private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', color: 'danger' | 'success', text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position,
      color,
      icon: 'close'
    });

    await toast.present();
  }

  changeDocumentNumber({ text }) {
    this.documentNumber = text;
  }

  changePassword({ text }) {
    this.password = text;
  }

  changeWantsToSaveCredentials({ isChecked }){
    this.wantsToSaveCredentials = isChecked;
  }

  async sendToAnotherPage(response: LoginResponse){
    this.presentToast('bottom', 'success', 'Usuario logeado con éxito');
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.auth.signInUser({documentNumber: this.documentNumber, password: this.password}).subscribe(
      response => this.sendToAnotherPage(response),
      () => this.presentToast('bottom', 'danger', 'Documento de identidad y/o contraseña incorrecta')
    );
  };

  ngOnInit() { }

}
