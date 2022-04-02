import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Profession } from '../model/profession';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  private baseUrl = `${environment.apiURL}/professions`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getProfessions(): Observable<Profession[]> {
    return this.http.get<Profession[]>(this.baseUrl).pipe();
  }

}
