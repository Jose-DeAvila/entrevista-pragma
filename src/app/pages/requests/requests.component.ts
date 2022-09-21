import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {}

}
