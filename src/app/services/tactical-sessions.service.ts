import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { TacticalSession  } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class TacticalSessionsService {

  private sessionsUrl = 'http://localhost:8080/tactical/sessions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  getTacticalSessions(): Observable<TacticalSession[]> {
    return this.http.get<TacticalSession[]>(this.sessionsUrl).pipe();
  }

  getTacticalSession(id: String): Observable<TacticalSession> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.get<TacticalSession>(url).pipe();
  }

}