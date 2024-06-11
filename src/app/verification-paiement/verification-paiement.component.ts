import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PaiementService } from '../service/paiement.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-verification-paiement',
  templateUrl: './verification-paiement.component.html',
  styleUrls: ['./verification-paiement.component.css']
})
export class VerificationPaiementComponent implements OnInit {
  code: string = '';
  id_client: number= Number(this.route.snapshot.paramMap.get('id_client')!)
  type: string = this.route.snapshot.paramMap.get('type')!;
 

  constructor(private route: ActivatedRoute, private paiementService: PaiementService, private router: Router, private clientService: ClientService) { }

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
          localStorage.setItem('type',this.type);
          this.paiementService.recharge(localStorage.getItem('phone')!, Number(localStorage.getItem('montant'))!, Number(localStorage.getItem('recharge'))).subscribe(
            data => {
              console.log(data);
              alert('Paiement effectué avec succès');
             this.router.navigate(['/paiement/recapitulatif',data.facture.id,data.recharge.id]); 
            }
          );
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
          localStorage.setItem('type',this.type);
          this.paiementService.donation(Number(localStorage.getItem('montant'))!,localStorage.getItem('phone')!, Number(localStorage.getItem('donation'))).subscribe(
            data => {
              console.log(data);
              alert('Paiement effectué avec succès');
             this.router.navigate(['/paiement/recapitulatif',data.facture.id,data.donation.id]); 
            }
          );
        }
        else{
          alert('Code incorrect');
        }
      }
    );
  }
  impaye(){
    this.paiementService.validateOTP(this.code, this.id_client).subscribe(
      data => {
        console.log(this.id_client);
        console.log(this.code);
        console.log(data);
        if (data){
          const id_impaye=Number(localStorage.getItem('impaye'));
          this.clientService.getTel(this.id_client).subscribe(
            data => {
              console.log(data.replace('+', ''));
              const tel = data.replace('+', '');
              this.paiementService.confirmerPaiement(id_impaye,tel).subscribe(
                data =>{
                  console.log(data);
                }
              );
            },
            error => {
              console.log(error);
            }
            );
            alert("Paiement effectué avec succès")
        }
        else{
          alert('Code incorrect');
        }
      }
    );
  }
}
