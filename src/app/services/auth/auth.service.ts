import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginInfo, LoginResponse } from 'src/app/core/models/auth.interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private cookieService: CookieService,
    private router: Router) { }

  signInUser(loginInfo: LoginInfo): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.baseUrl + '/api/login', loginInfo);
  }

  isLoggedIn(){
    const token = this.cookieService.get('token');
    const userInfo = window.localStorage.getItem('user-info');

    if(token && userInfo) {
      return true;
    }
    else {
      return false;
    }
  }

  saveUserInfo({ token, userInfo}: LoginResponse){
    this.cookieService.set('token', token);
    window.localStorage.setItem('user-info', JSON.stringify(userInfo));
  }

  logOutUser(){
    this.cookieService.delete('token');
    window.localStorage.clear();
    this.router.navigate(['/']);
  }
}
