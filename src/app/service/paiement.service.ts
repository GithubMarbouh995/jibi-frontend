import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../modals/facture';
import { Transaction } from '../modals/transaction';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private apiUrl = 'http://localhost:8080/api/paiement'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getFactureByIdAndCustomerId(id: number, customerId: number): Observable<Facture> {
    let params = new HttpParams().set('customerId', customerId.toString());
    return this.http.get<Facture>(`${this.apiUrl}/facture/${id}`, { params: params });
  }

  confirmerPaiement(factureId: number, phoneNumber: any): Observable<any> {
    console.log(phoneNumber);
    return this.http.post(`${this.apiUrl}/confirmer?id_impaye=${factureId}&phone=${phoneNumber}`, {});
  }
}