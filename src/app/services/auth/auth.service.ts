import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginInfo, LoginResponse } from 'src/app/interfaces/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  signInUser(loginInfo: LoginInfo): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.baseUrl + '/api/login', loginInfo);
  }
}
