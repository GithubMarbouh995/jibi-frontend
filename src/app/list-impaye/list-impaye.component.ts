import { Component, OnInit } from '@angular/core';
import { ImpayeService } from '../service/impaye.service';
import { get } from 'video.js/dist/types/tech/middleware';
import { ActivatedRoute, Router } from '@angular/router';
import { Impaye } from '../modals/impaye';
import { ClientService } from '../service/client.service';
import { PaiementService } from '../service/paiement.service';

@Component({
  selector: 'app-list-impaye',
  templateUrl: './list-impaye.component.html',
  styleUrls: ['./list-impaye.component.css']
})
export class ListImpayeComponent implements OnInit {
  id_client: number=Number(this.route.snapshot.paramMap.get('id_client')!);
  id_creance : number = Number(this.route.snapshot.paramMap.get('id_creance')!);
  tel : string = '';
  impayes: Impaye[] = [];

  constructor(private router: Router,private impayeService: ImpayeService, private route : ActivatedRoute, private clientService :  ClientService, private paiementService: PaiementService) { }

  ngOnInit(): void {
    console.log(this.id_creance);
    console.log(this.id_client);
    console.log("Hello");
    this.getImpayesByDebtCode(this.id_client, this.id_creance);
  }

  getImpayesByDebtCode(creance_id: number, client_id: number) {
    this.impayeService.getImpayesByDebtCode(1, 1).subscribe(
      data => {
        console.log(data);
        this.impayes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  payer(impaye: number){
      this.clientService.getTel(this.id_client).subscribe(
      data => {
        console.log(data.replace('+', ''));
        this.tel = data.replace('+', '');
        this.paiementService.confirmerPaiement(impaye,this.tel).subscribe(
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
      this.getImpayesByDebtCode(this.id_client, this.id_creance);
    }
    getIdClient(){
      this.clientService.getIdByTel(this.tel).subscribe(
        data => {
          this.id_client = data;
          console.log(data);
        }
      );
    }
    valider(impaye: number){
      localStorage.setItem('impaye',impaye.toString());
      this.paiementService.generateOTP(this.id_client).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/verification','FACTURE',this.id_client]);
        }
      );
    }
}
