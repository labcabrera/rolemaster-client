import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Item } from '../model/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = `${environment.apiURL}/items`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  find(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl).pipe();
  }

  findById(id: string): Observable<Item> {
    var url = `${this.baseUrl}/${id}`;
    return this.http.get<Item>(url).pipe();
  }
}
