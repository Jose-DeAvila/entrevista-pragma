import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {}

}
