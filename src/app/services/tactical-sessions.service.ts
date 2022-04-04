import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { TacticalSession, TacticalSessionCreation, TacticalSessionUpdate  } from '../model/session';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TacticalSessionsService {

  private baseUrl = `${environment.apiURL}/tactical-sessions`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  find(): Observable<TacticalSession[]> {
    return this.http.get<TacticalSession[]>(this.baseUrl).pipe();
  }

  findById(id: String): Observable<TacticalSession> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TacticalSession>(url).pipe();
  }

  findByStrategicSessionId(id: String): Observable<TacticalSession[]> {
    const url = `${this.baseUrl}/?strategicSessionId=${id}`;
    return this.http.get<TacticalSession[]>(url).pipe();
  }

  create(request: TacticalSessionCreation): Observable<TacticalSession> {
    return this.http.post<TacticalSession>(this.baseUrl, request, this.httpOptions).pipe();
  }

  update(id: string, request: TacticalSessionUpdate): Observable<TacticalSession> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<TacticalSession>(url, request, this.httpOptions).pipe();
  }

  delete(id: String) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, {observe: 'response'}).pipe(
      switchMap(res => res.status === 204 ? of([]) : of(res))
    );
  }

}