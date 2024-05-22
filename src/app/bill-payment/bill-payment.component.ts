import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent {
  creditors = [
    { logo: 'assets/pictures/maroc-telecom.png', name: 'IAM RECHARGES', description: 'TÉLÉPHONIE ET INTERNET SIM' , link: '/paiement/form'},
    { logo: 'assets/pictures/maroc-telecom.png', name: 'IAM FACTURES', description: 'PRODUIT INTERNET SIM, PRODUIT FIXE SIM, PRODUIT MOBILE SIM', link: '/paiement/form'},
    { logo: 'assets/pictures/redal.png', name: 'REDAL', description: 'FACTURES REDAL' , link: '/paiement/form'},
    { logo: 'assets/pictures/amendis.png', name: 'AMENDIS TANGER', description: 'FACTURES AMENDIS TANGER', link: '/paiement/form'},
    { logo: 'assets/pictures/amendis.png', name: 'AMENDIS TETOUAN', description: 'FACTURES AMENDIS TETOUAN', link: '/paiement/form'},
    { logo: 'assets/pictures/lydec.png', name: 'LYDEC', description: 'FACTURES LYDEC' ,link: '/paiement/form'}
  ];
  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
