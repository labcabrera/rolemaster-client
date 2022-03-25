import { Injectable } from '@angular/core';
import { CharacterCreationRequest, CharacterInfo } from '../model/character-info';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = 'http://localhost:8080/characters';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  getCharacters(): Observable<CharacterInfo[]> {
    return this.http.get<CharacterInfo[]>(this.charactersUrl)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<CharacterInfo[]>('getSessions', []))
      );
  }

  createCharacter(request: CharacterCreationRequest): Observable<CharacterInfo> {
    return this.http.post<CharacterInfo>(this.charactersUrl, request, this.httpOptions)
      .pipe(
        catchError(this.handleError2)
    );
  }

  deleteCharacter(id: string): Observable<null> {
    var url = this.charactersUrl + "/" + id;
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
