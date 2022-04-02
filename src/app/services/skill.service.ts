import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Skill } from '../model/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = `${environment.apiURL}/skills`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    const url = `${this.baseUrl}/?page=0&size=1000`;
    return this.http.get<Skill[]>(url).pipe();
  }

  findById(id: string): Observable<Skill> {
    const url = `${this.baseUrl}/id`;
    return this.http.get<Skill>(url).pipe();
  }
  
  getSkillsByCategoryId(categoryId: string): Observable<Skill[]> {
    const url = `${this.baseUrl}/?categoryId=${categoryId}&page=0&size=1000&sort=name,asc`;
    return this.http.get<Skill[]>(url).pipe();
  }

}
