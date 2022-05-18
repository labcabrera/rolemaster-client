import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profession } from '../model/profession';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  private baseUrl = `${environment.apiURL}/professions`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getProfessions(version: string): Observable<Profession[]> {
    const url = `${this.baseUrl}?version=${version}&sort=name,asc`
    return this.http.get<Profession[]>(url).pipe();
  }

  findById(professionId: string): Observable<Profession> {
    const url = `${this.baseUrl}/${professionId}`;
    return this.http.get<Profession>(url).pipe();
  }

}
