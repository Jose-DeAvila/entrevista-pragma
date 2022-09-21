import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastController } from '@ionic/angular';
import { LoginResponse } from 'src/app/core/models/auth.interfaces';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products.interfaces';
import { setProducts } from 'src/state/products/products.actions';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  documentNumber: string;
  password: string;
  wantsToSaveCredentials: boolean;
  isLoggingIn: boolean;

  constructor(
    private auth: AuthService,
    private toastController: ToastController,
    private router: Router,
    private store: Store,
    private productsService: ProductsService) { }

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

  setProducts(products: Product[]){
    this.store.dispatch(setProducts({ products }));
  }

  async sendToAnotherPage(response: LoginResponse){
    this.productsService.getProducts().subscribe(data => {
      this.setProducts(data.products);
    });
    this.auth.saveUserInfo(response);
    this.router.navigateByUrl('/dashboard');
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.isLoggingIn = true;
    this.auth.signInUser({documentNumber: this.documentNumber, password: this.password}).subscribe(
      response => this.sendToAnotherPage(response),
      () => this.presentToast('bottom', 'danger', 'Documento de identidad y/o contraseña incorrecta'),
    ).add(() => this.isLoggingIn = false);
  };

  ngOnInit() { }

}
