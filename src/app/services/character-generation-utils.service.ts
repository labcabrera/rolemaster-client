import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { CharacterCreationAttributes } from '../model/character-info';

@Injectable({
  providedIn: 'root'
})
export class CharacterGenerationUtilsService {

  private baseUrl = 'http://localhost:8080/character-creation';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  calculateAttributeCost(attributes: CharacterCreationAttributes): Observable<number> {
    var url = this.baseUrl + "/attribute-costs";
    return this.http.post<number>(url, attributes, this.httpOptions)
      .pipe();
  }

}
