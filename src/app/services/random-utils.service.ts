import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomUtilsService {

  private baseUrl = `${environment.apiURL}/rolls`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  randomRoll(max: number): Observable<number> {
    const url = `${this.baseUrl}/d/${max}`;
    return this.http.get<number>(url, this.httpOptions).pipe();
  }

  randomRollSum(max: number, count: number): Observable<number> {
    const url = `${this.baseUrl}/d/${max}/${count}`;
    return this.http.get<number>(url, this.httpOptions).pipe();
  }

}
