import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { TacticalSession  } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class TacticalSessionsService {

  private sessionsUrl = 'http://localhost:8080/tactical-sessions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  findTacticalSessions(): Observable<TacticalSession[]> {
    return this.http.get<TacticalSession[]>(this.sessionsUrl).pipe();
  }

  findTacticalSessionById(id: String): Observable<TacticalSession> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.get<TacticalSession>(url).pipe();
  }

  create(request: any): Observable<TacticalSession> {
    return this.http.post<TacticalSession>(this.sessionsUrl, request, this.httpOptions).pipe();
  }

  delete(id: String) {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.delete(url, {observe: 'response'}).pipe(
      switchMap(res => res.status === 204 ? of([]) : of(res))
    );
  }

}