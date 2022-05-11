import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.apiURL}/user`;

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  public findUser(): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl);
  }

  public findUserClaims(): Observable<User> {
    const url = `${this.baseUrl}/claims`;
    return this.httpClient.get<User>(url);
  }

  public create(user: User): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, user, this.httpOptions);
  }

}
