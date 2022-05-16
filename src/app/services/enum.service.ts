import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NamedKey } from '../model/commons';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  private baseUrl = `${environment.apiURL}/enumerations`;

  constructor(private http: HttpClient) { }

  findRolemasterVersions(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/rolemaster-version`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findRealms() {
    var url = `${this.baseUrl}/realm`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findManeuverDifficulties(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/maneuver-difficulty`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findMovementPaces(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/movement-pace`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findMeleeAttackTypes(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/melee-attack-type`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findMeleeAttackModes(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/melee-attack-mode`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findMeleeAttackFacingList(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/melee-attack-facing`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findItemPositions(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/item-position`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findTerrains(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/terrain`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findTemperatures(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/temperature-multiplier`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findCoverTypes(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/cover`
    return this.http.get<NamedKey[]>(url).pipe();
  }

  findMovingManeuverCombatSituations(): Observable<NamedKey[]> {
    var url = `${this.baseUrl}/moving-maneuver-combat-situation`
    return this.http.get<NamedKey[]>(url).pipe();
  }

}
