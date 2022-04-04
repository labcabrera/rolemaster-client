import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Universe } from '../model/commons'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {

  private baseUrl = `${environment.apiURL}/tactical-sessions`;

  constructor(private http: HttpClient) { }

  find(): Observable<Universe[]> {
    return this.http.get<Universe[]>(this.baseUrl).pipe();
  }

  findById(id: String): Observable<Universe> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Universe>(url).pipe();
  }

}
