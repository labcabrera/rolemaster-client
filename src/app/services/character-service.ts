import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CharacterCreationRequest, CharacterInfo } from '../model/character-info';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = `${environment.apiURL}/characters`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getCharacter(id: string): Observable<CharacterInfo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CharacterInfo>(url).pipe();
  }

  getCharacters(): Observable<CharacterInfo[]> {
    return this.http.get<CharacterInfo[]>(this.baseUrl).pipe();
  }

  createCharacter(request: CharacterCreationRequest): Observable<CharacterInfo> {
    return this.http.post<CharacterInfo>(this.baseUrl, request, this.httpOptions).pipe();
  }

  addSkill(characterId: string, skillId: string, customizations: string[]): Observable<CharacterInfo> {
    const request = {
      skillId: skillId,
      customizations: customizations
    };
    const url = `${this.baseUrl}/${characterId}/skills`;
    return this.http.post<CharacterInfo>(url, request, this.httpOptions).pipe();
  }

  upgradeSkillCategory(characterId: string, skillCategoryId: string, value: number): Observable<CharacterInfo> {
    const request: any = { categoryRanks: {} };
    request.categoryRanks[skillCategoryId] = value;
    const url = `${this.baseUrl}/${characterId}/skills/upgrade`;
    return this.http.post<CharacterInfo>(url, request, this.httpOptions).pipe();
  }

  upgradeSkill(characterId: string, skillId: string, value: number): Observable<CharacterInfo> {
    const request: any = { skillRanks: {} };
    request.skillRanks[skillId] = value;
    const url = `${this.baseUrl}/${characterId}/skills/upgrade`;
    return this.http.post<CharacterInfo>(url, request, this.httpOptions).pipe();
  }

  upgradeTrainingPackage(characterId: string, trainingPackageUpgrade: any): Observable<CharacterInfo> {
    const url = `${this.baseUrl}/${characterId}/training-packages`;
    return this.http.post<CharacterInfo>(url, trainingPackageUpgrade, this.httpOptions).pipe();
  }

  deleteCharacter(id: string): Observable<null> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<null>(url, this.httpOptions).pipe();
  }

}
