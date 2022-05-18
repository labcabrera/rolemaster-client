import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Universe } from '../model/commons'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {

  private baseUrl = `${environment.apiURL}/universes`;

  constructor(private http: HttpClient) { }

  find(): Observable<Universe[]> {
    return this.http.get<Universe[]>(this.baseUrl).pipe();
  }

  findById(id: string): Observable<Universe> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Universe>(url).pipe();
  }

}
