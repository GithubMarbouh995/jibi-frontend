import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PaiementService } from '../service/paiement.service';

@Component({
  selector: 'app-verification-paiement',
  templateUrl: './verification-paiement.component.html',
  styleUrls: ['./verification-paiement.component.css']
})
export class VerificationPaiementComponent implements OnInit {
  code: string = '';
  id_client: number= Number(this.route.snapshot.paramMap.get('id_client')!)
  type: string = this.route.snapshot.paramMap.get('type')!;

  constructor(private route: ActivatedRoute, private paiementService: PaiementService) { }

  ngOnInit(): void {
    console.log(this.type);
  }

  recharge(){
    this.paiementService.validateOTP(this.code, this.id_client).subscribe(
      data => {
        console.log(this.id_client);
        console.log(this.code);
        console.log(data);
        if (data){
          console.log(localStorage.getItem('recharge'));
          console.log(localStorage.getItem('montant'));
          this.paiementService.recharge(localStorage.getItem('phone')!, Number(localStorage.getItem('montant'))!, Number(localStorage.getItem('recharge'))).subscribe(
            data => {
              console.log(data);
            }
          );
          alert('Paiement effectué avec succès');
        }
        else{
          alert('Code incorrect');
        }
      }
    );
  }

  donation(){
    this.paiementService.validateOTP(this.code, this.id_client).subscribe(
      data => {
        console.log(this.id_client);
        console.log(this.code);
        console.log(data);
        if (data){
          console.log(localStorage.getItem('recharge'));
          console.log(localStorage.getItem('fullname'));
          this.paiementService.donation(Number(localStorage.getItem('montant'))!,localStorage.getItem('phone')!, Number(localStorage.getItem('donation'))).subscribe(
            data => {
              console.log(data);
            }
          );
          alert('Paiement effectué avec succès');
        }
        else{
          alert('Code incorrect');
        }
      }
    );
  }
}
