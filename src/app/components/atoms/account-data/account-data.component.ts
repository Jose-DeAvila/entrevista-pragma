import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products.interfaces';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss'],
})

export class AccountDataComponent implements OnInit {

  @Input() product: Product;
  currentBalance;

  constructor() {}

  ngOnInit() {
    const numberFormat = new Intl.NumberFormat('es-CO');
    this.currentBalance = numberFormat.format(this.product.availableBalance);
  }

}
