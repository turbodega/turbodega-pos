import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiUrl: string = 'assets';

  constructor(private http: HttpClient) { }

  getProducts(): any{
    const url = `${this.apiUrl}/mockdata/products/products.json`;
    console.log(`URL: ${url}`);
    return this.http.get(url);
  }
  
  getOrder(): any{
    const url = `${this.apiUrl}/mockdata/order.json`;
    console.log(`URL: ${url}`);
    return this.http.get(url);
  }

}
