import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent {
  creditors = [
    { logo: 'assets/pictures/maroc-telecom.png', name: 'IAM RECHARGES', description: 'TÉLÉPHONIE ET INTERNET SIM' },
    { logo: 'assets/pictures/maroc-telecom.png', name: 'IAM FACTURES', description: 'PRODUIT INTERNET SIM, PRODUIT FIXE SIM, PRODUIT MOBILE SIM' },
    { logo: 'assets/pictures/redal.png', name: 'REDAL', description: 'FACTURES REDAL' },
    { logo: 'assets/pictures/amendis.png', name: 'AMENDIS TANGER', description: 'FACTURES AMENDIS TANGER' },
    { logo: 'assets/pictures/amendis.png', name: 'AMENDIS TETOUAN', description: 'FACTURES AMENDIS TETOUAN' },
    { logo: 'assets/pictures/lydec.png', name: 'LYDEC', description: 'FACTURES LYDEC' }
  ];
}
