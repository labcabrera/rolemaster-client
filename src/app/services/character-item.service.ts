import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CharacterItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CharacterItemService {

  private baseUrl = `${environment.apiURL}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  findCharacterItems(characterId: string): Observable<CharacterItem[]>  {
    const url = `${this.baseUrl}/character-items/characters/${characterId}`;
    return this.http.get<CharacterItem[]>(url, this.httpOptions).pipe();
  }

  updateItemPosition(characterItemId: string, position: string) {
    const url = `${this.baseUrl}/character-items/${characterItemId}/position/${position}`;
    return this.http.post<CharacterItem>(url, this.httpOptions).pipe();
  }

  deleteCharacterItem(characterItemId: string): Observable<any> {
    const url = `${this.baseUrl}/character-items/${characterItemId}`;
    return this.http.delete<CharacterItem>(url, this.httpOptions).pipe();
  }

  addItem(characterId: string, request: any): Observable<CharacterItem> {
    const url = `${this.baseUrl}/character-items/characters/${characterId}`;
    return this.http.post<CharacterItem>(url, request, this.httpOptions).pipe();
  }

}
