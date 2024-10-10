import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PaginationParams, Product } from '../../types'; // Asegúrate de tener este tipo

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  get(url: string, options: { params?: PaginationParams; responseType?: 'json' }): Observable<Product[]> {
    let httpParams = new HttpParams();
    if (options.params) {
      if (options.params.perPage) {
        httpParams = httpParams.append('limit', options.params.perPage.toString());
      }
      if (options.params.page) {
        httpParams = httpParams.append('page', options.params.page.toString());
      }
    }

    return this.http.get<Product[]>(url, { ...options, params: httpParams }).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
