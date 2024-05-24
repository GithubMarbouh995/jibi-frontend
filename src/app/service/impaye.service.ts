import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpayeService {
  private apiUrl = '/impayes'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getImpayesByDebtCode(debtCode: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${debtCode}`);
  }
}