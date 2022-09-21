import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/models/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private cookieService: CookieService) { }

  getProducts(): Observable<ProductService>{
    const token = this.cookieService.get('token');
    return this.http.get<ProductService>(this.baseUrl + '/api/products', {
      headers: {
        token
      }
    });
  }
}
