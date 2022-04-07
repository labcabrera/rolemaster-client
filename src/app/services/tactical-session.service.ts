import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { TacticalCharacterContext } from '../model/character-context';
import { TacticalSession, TacticalSessionCreation, TacticalSessionUpdate  } from '../model/session';
import { TacticalRound } from '../model/round';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TacticalSessionService {


  private baseUrlTacticalSessions = `${environment.apiURL}/tactical-sessions`;
  private baseUrlTacticalContexts = `${environment.apiURL}/tactical-character-contexts`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

  find(): Observable<TacticalSession[]> {
    return this.http.get<TacticalSession[]>(this.baseUrlTacticalSessions).pipe();
  }

  findById(id: String): Observable<TacticalSession> {
    const url = `${this.baseUrlTacticalSessions}/${id}`;
    return this.http.get<TacticalSession>(url).pipe();
  }

  findByStrategicSessionId(id: String): Observable<TacticalSession[]> {
    const url = `${this.baseUrlTacticalSessions}/?strategicSessionId=${id}`;
    return this.http.get<TacticalSession[]>(url).pipe();
  }

  create(request: TacticalSessionCreation): Observable<TacticalSession> {
    return this.http.post<TacticalSession>(this.baseUrlTacticalSessions, request, this.httpOptions).pipe();
  }

  update(id: string, request: TacticalSessionUpdate): Observable<TacticalSession> {
    const url = `${this.baseUrlTacticalSessions}/${id}`;
    return this.http.patch<TacticalSession>(url, request, this.httpOptions).pipe();
  }

  findTacticalCharacterContexts(tacticalSessionId: string): Observable<TacticalCharacterContext[]> {
    const url = `${this.baseUrlTacticalSessions}/${tacticalSessionId}/characters`;
    return this.http.get<TacticalCharacterContext[]>(url, this.httpOptions).pipe();
  }

  addNpc(tacticalSessionId: string, npcId: string): Observable<TacticalCharacterContext> {
    const url = `${this.baseUrlTacticalSessions}/${tacticalSessionId}/characters/npc/${npcId}`;
    return this.http.post<TacticalCharacterContext>(url, this.httpOptions).pipe();
  }

  addCharacter(tacticalSessionId: string, characterId: string): Observable<TacticalCharacterContext> {
    const url = `${this.baseUrlTacticalSessions}/${tacticalSessionId}/characters/player/${characterId}`;
    return this.http.post<TacticalCharacterContext>(url, this.httpOptions).pipe();
  }

  delete(id: String) {
    const url = `${this.baseUrlTacticalSessions}/${id}`;
    return this.http.delete(url, {observe: 'response'}).pipe(
      switchMap(res => res.status === 204 ? of([]) : of(res))
    );
  }

  deleteTacticalCharacterContext(tacticalCharacterContextId: string) {
    const url = `${this.baseUrlTacticalContexts}/${tacticalCharacterContextId}`;
    return this.http.delete(url, {observe: 'response'}).pipe(
      switchMap(res => res.status === 204 ? of([]) : of(res))
    );
  }

  getCurrentRound(tacticalSessionId: string): Observable<TacticalRound> {
    const url = `${this.baseUrlTacticalSessions}/${tacticalSessionId}/round`;
    return this.http.get<TacticalRound>(url, this.httpOptions).pipe();
  }

  startRound(tacticalSessionId: string): Observable<TacticalRound> {
    const url = `${this.baseUrlTacticalSessions}/${tacticalSessionId}/round`;
    return this.http.post<TacticalRound>(url, this.httpOptions).pipe();
  }

}