import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { SpellList } from '../model/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellListService {

  private baseUrl = `${environment.apiURL}/spell-lists`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  find(): Observable<SpellList[]> {
    const url = `${this.baseUrl}/?page=0&size=1000`;
    return this.http.get<SpellList[]>(url).pipe();
  }

  findById(id: string): Observable<SpellList> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<SpellList>(url).pipe();
  }

}
