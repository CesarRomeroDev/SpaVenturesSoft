import { Injectable } from '@angular/core';
import { envorinments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { MenuItem, TopLevel } from '../interfaces/category';

const baseUrl = envorinments.baseUrlCategory;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategory(): Observable<MenuItem[]>{
    return this.http
      .get<TopLevel>(`${baseUrl}`)
      .pipe(
        map((response) => {
          return response.menuItems;
        }),
        catchError((error) => {
          console.log('Error', error);
          return of([]);
        })
      )
  }

}
