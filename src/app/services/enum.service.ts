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

  findRealms() {
    var url = `${this.baseUrl}/realm`
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

}
