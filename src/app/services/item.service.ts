import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    var url = `${this.baseUrl}?page=0&size=1000&sort=name,asc`;
    return this.http.get<Item[]>(url).pipe();
  }

  findById(id: string): Observable<Item> {
    var url = `${this.baseUrl}/${id}`;
    return this.http.get<Item>(url).pipe();
  }
}
