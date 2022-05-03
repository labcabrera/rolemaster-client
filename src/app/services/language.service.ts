import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Language } from '../model/commons';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private baseUrl = `${environment.apiURL}/languages`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  find(): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseUrl).pipe();
  }

  findById(id: string): Observable<Language> {
    var url = `${this.baseUrl}/${id}`;
    return this.http.get<Language>(url).pipe();
  }
}
