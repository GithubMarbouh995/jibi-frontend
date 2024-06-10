import { Component, OnInit } from '@angular/core';
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  id_client: number =1;
  isExpanded = false;
  client: any;
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClient();
  }


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  getClient(){
    this.clientService.getClient(this.id_client).subscribe((data: any) => {
      console.log(data);
      this.client = data;
      console.log(this.client);
    });
  }

}
