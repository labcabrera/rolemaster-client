import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { CharacterCreationAttributes } from '../model/character-info';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterGenerationUtilsService {

  private baseUrl = `${environment.apiURL}/character-creation`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  calculateAttributeCost(attributes: CharacterCreationAttributes): Observable<number> {
    const url = `${this.baseUrl}/attribute-costs`;
    return this.http.post<number>(url, attributes, this.httpOptions).pipe();
  }

  calculateAttributeModifiers(request: any): Observable<any> {
    const url = `${this.baseUrl}/attributes`;
    return this.http.post<any>(url, request, this.httpOptions).pipe();
  }

}
