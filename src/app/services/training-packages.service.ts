import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TrainingPackage } from '../model/training-packages';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingPackageService {

  private baseUrl = `${environment.apiURL}/training-packages`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  find(version: string): Observable<TrainingPackage[]> {
    const url = `${this.baseUrl}?version=${version}&size=1000&sort=name,asc`
    return this.http.get<TrainingPackage[]>(url).pipe();
  }

  findById(id: string): Observable<TrainingPackage> {
    var url = `${this.baseUrl}/${id}`;
    return this.http.get<TrainingPackage>(url).pipe();
  }
}
