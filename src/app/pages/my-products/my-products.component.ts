import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/products.interfaces';
import { selectProducts } from '../../../state/products/products.selector';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private menu: MenuController, private store: Store) {
    this.products$ = this.store.select(selectProducts);
  }

  isAccount(product: Product){
    return product.productType === 'CA' || product.productType === 'CC';
  }

  isNotAccount(product: Product){
    return product.productType !== 'CA' && product.productType !== 'CC';
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
  }

}
