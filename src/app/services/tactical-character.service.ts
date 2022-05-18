import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TacticalCharacter } from '../model/character-context';

@Injectable({
  providedIn: 'root'
})
export class TacticalCharacterService {

  private baseUrl = `${environment.apiURL}/tactical-characters`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  update(tacticalCharacterId: string, request: any): Observable<TacticalCharacter> {
    const url = `${this.baseUrl}/${tacticalCharacterId}`;
    return this.http.patch<TacticalCharacter>(url, request, this.httpOptions).pipe();
  }
}
