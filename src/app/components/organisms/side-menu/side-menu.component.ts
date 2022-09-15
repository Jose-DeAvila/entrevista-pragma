import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  userInfo = this.userService.getUserInfo();

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userInfo);
  }

}
