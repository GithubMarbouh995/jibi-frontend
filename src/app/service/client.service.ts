import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../modals/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'api/client'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  senderCode(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/SendVerificationCode`, client);
  }

  validationCode(client: Client, code: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/ValidationCode?code=${code}`, client);
  }

  sendEmail(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/SendEmail`, {});
  }
}