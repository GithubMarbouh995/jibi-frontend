import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiment-form',
  templateUrl: './paiment-form.component.html',
  styleUrls: ['./paiment-form.component.css']
})
export class PaimentFormComponent implements OnInit {
  fullname : String = '';
  montant : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Valider(){
    console.log(this.fullname);
    console.log(this.montant);
  }

}
