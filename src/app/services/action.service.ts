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

  findActionsByRound(roundId: string): Observable<TacticalAction[]>  {
    const url = `${this.baseUrl}/tactical-actions/rounds/${roundId}`;
    return this.http.get<TacticalAction[]>(url, this.httpOptions).pipe();
  }

  declare(action: TacticalActionDeclaration): Observable<TacticalRound> {
    const url = `${this.baseUrl}/tactical-actions`;
    return this.http.post<TacticalRound>(url, action, this.httpOptions).pipe();
  }

  delete(actionId: string): Observable<TacticalRound> {
    const url = `${this.baseUrl}/tactical-actions/${actionId}`;
    return this.http.delete<TacticalRound>(url, this.httpOptions).pipe();
  }

}
