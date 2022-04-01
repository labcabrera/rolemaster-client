import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private charactersUrl = 'http://localhost:8080/skills';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.charactersUrl).pipe();
  }

  findById(id: string): Observable<Skill> {
    const url = this.charactersUrl + "/" + id;
    return this.http.get<Skill>(url).pipe();
  }
  
  getSkillsByCategoryId(categoryId: string): Observable<Skill[]> {
    const url = this.charactersUrl + "?categoryId=" + categoryId;
    return this.http.get<Skill[]>(url).pipe();
  }

}
