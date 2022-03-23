import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUtilsService {

  private baseUrl = 'http://localhost:8080/rolls';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  randomRoll(max: number): Observable<number> {
    var url = this.baseUrl + "/d/" + max;
    return this.http.get<number>(url, this.httpOptions)
      .pipe();
  }

  randomRollSum(max: number, count: number): Observable<number> {
    var url = this.baseUrl + "/d/" + max + "/" + count + "/sum" ;
    return this.http.get<number>(url, this.httpOptions)
      .pipe();
  }

}
