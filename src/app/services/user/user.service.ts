import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/core/models/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserInfo(): UserInfo {
    return JSON.parse(window.localStorage.getItem('user-info'));
  }
}
