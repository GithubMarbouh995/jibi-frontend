import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-recapitulatif',
  templateUrl: './paiement-recapitulatif.component.html',
  styleUrls: ['./paiement-recapitulatif.component.css']
})
export class PaiementRecapitulatifComponent implements OnInit {
  fullname = 'John Doe';
  montant = 300;
  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
