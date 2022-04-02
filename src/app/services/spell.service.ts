import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Spell } from '../model/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  private baseUrl = `${environment.apiURL}/spells`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  findSpells(): Observable<Spell[]> {
    const url = `${this.baseUrl}/?page=0&size=1000`;
    return this.http.get<Spell[]>(url).pipe();
  }

  findSpellById(id: string): Observable<Spell> {
    const url = `${this.baseUrl}/"{id}`;
    return this.http.get<Spell>(url).pipe();
  }

}
