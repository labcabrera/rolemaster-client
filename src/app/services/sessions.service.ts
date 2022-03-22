import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Session } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private sessionsUrl = 'http://localhost:8080/sessions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionsUrl)
      .pipe(
        tap(_ => this.log('fetched sessions')),
        catchError(this.handleError<Session[]>('getSessions', []))
      );
  }

  getSession(id: String): Observable<Session> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.get<Session>(url).pipe(
        tap(_ => this.log('fetched session')),
        catchError(this.handleError<Session>('getSession', {id:'',name:''}))
      );
  }

  createSession(hero: Session): Observable<Session> {
    return this.http.post<Session>(this.sessionsUrl + "?name=test", hero, this.httpOptions).pipe(
      tap((newHero: Session) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Session>('addHero'))
    );
  }

  deleteSession(id: String): Observable<Session> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.delete<Session>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted session id=${id}`)),
      catchError(this.handleError<Session>('deleteSession'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }

}
