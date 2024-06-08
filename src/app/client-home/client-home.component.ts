import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
