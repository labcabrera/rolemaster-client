import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CharacterCustomization } from '../model/character-info';

@Injectable({
  providedIn: 'root'
})
export class CharacterCustomizationService {

  private baseUrl = `${environment.apiURL}/character-customizations`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  find(): Observable<CharacterCustomization[]> {
    var url = `${this.baseUrl}?page=0&size=1000&sort=name,ASC`;
    return this.http.get<CharacterCustomization[]>(url).pipe();
  }

  findByType(version: string, type: string): Observable<CharacterCustomization[]> {
    var url = `${this.baseUrl}?version=${version}&type=${type}&page=0&size=1000&sort=name,ASC`;
    return this.http.get<CharacterCustomization[]>(url).pipe();
  }

  findById(id: string): Observable<CharacterCustomization> {
    var url = `${this.baseUrl}/${id}`;
    return this.http.get<CharacterCustomization>(url).pipe();
  }
}
