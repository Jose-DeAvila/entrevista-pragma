import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { resetProducts } from 'src/state/products/products.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  userInfo = this.userService.getUserInfo();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private store: Store) { }

  logOutUser(){
    this.store.dispatch(resetProducts());
    this.authService.logOutUser();
  }

  ngOnInit() {
  }

}
