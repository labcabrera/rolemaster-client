import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Npc } from '../model/npc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  private baseUrl = `${environment.apiURL}/npc`;

  constructor(private http: HttpClient) { }

  find(): Observable<Npc[]> {
    return this.http.get<Npc[]>(this.baseUrl).pipe();
  }

  findNpcById(id: string): Observable<Npc> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Npc>(url).pipe();
  }
}
