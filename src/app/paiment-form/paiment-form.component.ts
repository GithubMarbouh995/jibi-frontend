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
  imagePath: string | null = '';

  constructor(private route : ActivatedRoute,) { }

  ngOnInit(): void {  
    this.imagePath = localStorage.getItem('image');
    console.log(this.id);
  }

  Valider(){
    console.log(this.fullname);
    console.log(this.montant);
  }

}
