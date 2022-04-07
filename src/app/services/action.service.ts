import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { TacticalRound } from '../model/round';
import { TacticalAction, TacticalActionDeclaration } from '../model/actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private baseUrl = `${environment.apiURL}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  declare(tacticalSessionId: string, action: TacticalActionDeclaration): Observable<TacticalRound> {
    const url = `${this.baseUrl}/tactical-sessions/${tacticalSessionId}/actions`;
    console.log("Action declaration url: ", url);
    return this.http.post<TacticalRound>(url, action, this.httpOptions).pipe();
  }

  delete(tacticalSessionId: string, source: string, priority: string): Observable<TacticalRound> {
    const url = `${this.baseUrl}/tactical-sessions/${tacticalSessionId}/actions/${source}/${priority}`;
    return this.http.delete<TacticalRound>(url, this.httpOptions).pipe();
  }

}
