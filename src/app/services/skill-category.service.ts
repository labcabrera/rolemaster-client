import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { SkillCategory } from '../model/skill-category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkillCategoryService {

  private baseUrl = `${environment.apiURL}/skill-categories`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSkillCategories(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(this.baseUrl).pipe();
  }

  findById(id: string): Observable<SkillCategory> {
    var url = `${this.baseUrl}/${id}`;
    return this.http.get<SkillCategory>(url).pipe();
  }

}
