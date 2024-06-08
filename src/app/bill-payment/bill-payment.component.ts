import { Component } from '@angular/core';
import { Creancier } from '../modals/creancier';
import { CmiService } from '../service/cmi.service';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent {
  creanciers: Creancier[]=[]
  constructor(private cmiService: CmiService) { }

  ngOnInit(): void {
    this.getAllCreancier();
  }

  getAllCreancier(){
    return this.cmiService.getAllCreanciers().subscribe(
      data =>{
        this.creanciers=data;
        console.log(data);
      }
    )
  }
}
