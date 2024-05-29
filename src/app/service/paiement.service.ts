import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../modals/facture';
import { Transaction } from '../modals/transaction';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private apiUrl = '/api/paiement'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getFactureByIdAndCustomerId(id: number, customerId: number): Observable<Facture> {
    let params = new HttpParams().set('customerId', customerId.toString());
    return this.http.get<Facture>(`${this.apiUrl}/facture/${id}`, { params: params });
  }

  confirmerPaiement(factureId: number, phoneNumber: string): Observable<Transaction> {
    let params = new HttpParams()
      .set('factureId', factureId.toString())
      .set('phoneNumber', phoneNumber);
    return this.http.post<Transaction>(`${this.apiUrl}/confirmer`, {}, { params: params });
  }
}