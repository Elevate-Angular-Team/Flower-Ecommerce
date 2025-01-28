import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  private apiUrl = 'https://flower.elevateegy.com/api/v1';

  constructor(private http: HttpClient) {}

  getCategories(limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories?limit=${limit}`);
  }

  getProductsByCategory(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products?keyword=${keyword}`);
  }
}