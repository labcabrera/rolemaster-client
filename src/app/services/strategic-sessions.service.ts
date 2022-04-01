import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { StrategicSession, SessionCreationRequest } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class StrategicSessionsService {

  private sessionsUrl = 'http://localhost:8080/strategic-sessions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  getSessions(): Observable<StrategicSession[]> {
    return this.http.get<StrategicSession[]>(this.sessionsUrl)
      .pipe(
        tap(_ => this.log('fetched sessions')),
        catchError(this.handleError<StrategicSession[]>('getSessions', []))
      );
  }

  getSession(id: String): Observable<StrategicSession> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.get<StrategicSession>(url).pipe();
  }

  createSession(request: SessionCreationRequest): Observable<StrategicSession> {
    return this.http.post<StrategicSession>(this.sessionsUrl, request, this.httpOptions)
      .pipe(
        catchError(this.handleError2)
    );
  }

  updateSession(id: string, request: any): Observable<StrategicSession> {
    return this.http.patch<any>(this.sessionsUrl + "/" + id, request, this.httpOptions).pipe();
  }

  deleteSession(id: String) {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.delete<StrategicSession>(url, {observe: 'response'}).pipe(
      switchMap(res => res.status === 204 ? of([]) : of(res))
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