import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Race } from '../model/race';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private baseUrl = `${environment.apiURL}/races`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  find(): Observable<Race[]> {
    return this.http.get<Race[]>(this.baseUrl).pipe();
  }

  findById(raceId: string): Observable<Race> {
    const url = `${this.baseUrl}/${raceId}`;
    return this.http.get<Race>(url).pipe();
  }

}
