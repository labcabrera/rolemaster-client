import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManeuverService {

  private baseUrl = `${environment.apiURL}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  executeMovingManeuver(request: any): Observable<any> {
    const url = `${this.baseUrl}/maneuvers/moving`;
    return this.http.post<any>(url, request, this.httpOptions).pipe();
  }

  executeStaticManeuver(request: any): Observable<any> {
    const url = `${this.baseUrl}/maneuvers/static`;
    return this.http.post<any>(url, request, this.httpOptions).pipe();
  }
}
