import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { SkillCategory } from '../model/skill-category';
@Injectable({
  providedIn: 'root'
})
export class SkillCategoryService {

  private skillCategoryUrl = 'http://localhost:8080/skill-categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSkillCategories(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(this.skillCategoryUrl).pipe();
  }

  findById(id: string): Observable<SkillCategory> {
    return this.http.get<SkillCategory>(this.skillCategoryUrl + "/" + id).pipe();
  }

}
