import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { CharacterCreationRequest, CharacterInfo, SkillUpgradeRequest } from '../model/character-info';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = `${environment.apiURL}/characters`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getCharacter(id: string): Observable<CharacterInfo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CharacterInfo>(url).pipe();
  }

  getCharacters(): Observable<CharacterInfo[]> {
    return this.http.get<CharacterInfo[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<CharacterInfo[]>('getSessions', []))
      );
  }

  createCharacter(request: CharacterCreationRequest): Observable<CharacterInfo> {
    return this.http.post<CharacterInfo>(this.baseUrl, request, this.httpOptions)
      .pipe(
        catchError(this.handleError2)
      );
  }

  upgradeSkillCategory(characterId: string, skillCategoryId: string, value: number): Observable<CharacterInfo> {
    const request: any = {
      categoryRanks: {}
    };
    request.categoryRanks[skillCategoryId] = value;
    const url = `${this.baseUrl}/${characterId}/skills/upgrade`;
    return this.http.post<CharacterInfo>(url, request, this.httpOptions).pipe();
  }

  deleteCharacter(id: string): Observable<null> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<null>(url, this.httpOptions).pipe(
      catchError(this.handleError2)
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private handleError2(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }


}
