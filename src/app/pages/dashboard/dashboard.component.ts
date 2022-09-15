import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {}

}
