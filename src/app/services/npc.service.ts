import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Npc } from '../model/npc';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  private npcUrl = "http://localhost:8080/npc";

  constructor(private http: HttpClient) { }

  find(): Observable<Npc[]> {
    return this.http.get<Npc[]>(this.npcUrl).pipe();
  }

  findNpcById(id: string): Observable<Npc> {
    return this.http.get<Npc>(this.npcUrl + "/" + id).pipe();
  }
}
