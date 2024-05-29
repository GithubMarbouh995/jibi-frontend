import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-paiment-form',
  templateUrl: './paiment-form.component.html',
  styleUrls: ['./paiment-form.component.css']
})
export class PaimentFormComponent implements OnInit {
  fullname : string = '';
  montant : number = 0;
  tel: string='';
  type: string=this.route.snapshot.paramMap.get('type')!;
  id: number= Number(this.route.snapshot.paramMap.get('id')!);

  constructor(private route : ActivatedRoute,) { }

  ngOnInit(): void {  
  }

  Valider(){
    console.log(this.fullname);
    console.log(this.montant);
  }

}
