import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-paiment-form',
  templateUrl: './paiment-form.component.html',
  styleUrls: ['./paiment-form.component.css']
})
export class PaimentFormComponent implements OnInit {
  fullname : String = '';
  montant : number = 0;
  private router ?: Router;


  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  Valider(){
    console.log(this.fullname);
    console.log(this.montant);

  }

}
