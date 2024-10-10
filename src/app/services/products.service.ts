import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Products, PaginationParams, Product } from '../../types'; // Asegúrate de que la ruta sea correcta
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts(url: string, params: PaginationParams): Observable<Products> {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    }).pipe(
      map((data: Product[]) => {
        return {
          items: data,
          total: data.length,
          page: params.page || 1, 
          limit: params.perPage || data.length 
        } as Products;
      })
    );
  }

  getSales(url: string, params: PaginationParams): Observable<Products> {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    }).pipe(
      map((data: Product[]) => {
        return {
          items: data,
          total: data.length,
          page: params.page || 1, 
          limit: params.perPage || data.length 
        } as Products;
      })
    );
  }
}
