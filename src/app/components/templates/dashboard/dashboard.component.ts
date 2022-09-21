import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/products.interfaces';
import { selectProducts } from 'src/state/products/products.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectProducts);
  }

  ngOnInit() {}

}
