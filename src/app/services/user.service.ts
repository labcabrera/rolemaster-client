import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:8080/user/';

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public create(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL, user, this.httpOptions);
  }

}
