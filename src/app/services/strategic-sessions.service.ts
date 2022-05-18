import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { StrategicSession, SessionCreationRequest } from '../model/session';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StrategicSessionsService {

  private baseUrl = `${environment.apiURL}/strategic-sessions`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  find(): Observable<StrategicSession[]> {
    return this.http.get<StrategicSession[]>(this.baseUrl).pipe();
  }

  findById(id: string): Observable<StrategicSession> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<StrategicSession>(url).pipe();
  }

  create(request: SessionCreationRequest): Observable<StrategicSession> {
    return this.http.post<StrategicSession>(this.baseUrl, request, this.httpOptions).pipe();
  }

  update(id: string, request: any): Observable<StrategicSession> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<any>(url, request, this.httpOptions).pipe();
  }

  delete(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<StrategicSession>(url, { observe: 'response' }).pipe(
      switchMap(res => res.status === 204 ? of([]) : of(res))
    );
  }

}
