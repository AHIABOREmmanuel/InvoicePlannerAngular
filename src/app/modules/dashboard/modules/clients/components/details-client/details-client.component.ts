import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../../../../services/Clients/clients.service';

@Component({
  selector: 'app-details-client',
  standalone: false,
  templateUrl: './details-client.component.html',
  styleUrl: './details-client.component.css'
})
export class DetailsClientComponent {
  client: any;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientsService
  ) {
    this.getClientDetails();
  }

  ngOnInit() {
    this.getClientDetails();
  }

  private getClientDetails() {
    this.loading = true;
    this.error = null;

    this.route.paramMap.subscribe(params => {
      const clientId = params.get('id');
      if (clientId) {
        this.clientService.getClientById(clientId).subscribe(
          (client) => {
            this.client = client;
            this.loading = false;
          },
          (error) => {
            this.error = 'Erreur lors de la récupération du client';
            console.error('Erreur:', error);
            this.loading = false;
          }
        );
      }
    });
  }
}
