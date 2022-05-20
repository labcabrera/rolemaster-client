import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Race } from '../model/race';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private baseUrl = `${environment.apiURL}/races`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  find(version: string, universeId: string): Observable<Race[]> {
    const url = `${this.baseUrl}?version=${version}&universeId=${universeId}&size=1000&sort=name,asc`;
    return this.http.get<Race[]>(url).pipe();
  }

  findById(raceId: string): Observable<Race> {
    const url = `${this.baseUrl}/${raceId}`;
    return this.http.get<Race>(url).pipe();
  }

}
