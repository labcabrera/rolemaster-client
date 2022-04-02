import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Race } from '../model/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private racesUrl = 'http://localhost:8080/races';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.racesUrl).pipe();
  }

}
