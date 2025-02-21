import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brands, MenuItem } from '../interfaces/brands';
import { envorinments } from '../../../environments/environments';
import { catchError, map, Observable, of } from 'rxjs';

const baseUrl = envorinments.baseUrlBrands;

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(
    private http: HttpClient
  ) { }

  getBrandsFilters(): Observable<MenuItem[]>{
    return this.http
      .get<Brands>(`${baseUrl}`)
      .pipe(
        map((response) => {
          return response.menuItems.slice(0, 7);
        }),
        catchError((error) => {
          console.log('Error', error);
          return of([]);
        })
      )
    }

  getBrands(): Observable<MenuItem[]>{
    return this.http
      .get<Brands>(`${baseUrl}`)
      .pipe(
        map((response) => {
          return response.menuItems.slice(7)
        }),
        catchError((error) => {
          console.log('Error', error);
          return of([]);
        })
      )
    }
}
