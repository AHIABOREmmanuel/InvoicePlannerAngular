import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../../../../services/Clients/clients.service';
import { ClientRequest } from '../../../../../../models/requests/Clients/client-request';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-client',
  standalone: false,
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css',
})
export class EditClientComponent {
  clientForm!: FormGroup;
  clientId!: string;
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private clientService: ClientsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du client dans l'URL
    this.clientId = this.route.snapshot.paramMap.get('id')!;

    // Initialiser le formulaire
    this.clientForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      societe: ['', Validators.required],
      numeroTVA: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
    });

    // Charger les données du client
    this.clientService.getClientById(this.clientId).subscribe((client) => {
      this.clientForm.patchValue(client.data);
    });
  }

  onUpdate(): void {
    const clientData: ClientRequest = this.clientForm.value;
    if (this.clientForm.invalid) {
      return;
    }

    this.isLoading = true;

    this.clientService.updateClient(this.clientId, clientData).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({
          title: 'Modification reussi',
          text: 'Le client a été modifier avec succès',
          icon: 'success',
          draggable: true,
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Modification réussi',
          detail: 'Le client a été modifier avec succès',
        });
        this.router.navigate(['/dashboard/clients']);
      },
      error: (error) => {
        this.isLoading = false;
        //this.errorMessage = "Une erreur s'est produite lors de l'ajout du client";
        Swal.fire({
          title: 'Erreur',
          text: "Une erreur s'est produite lors de la modification du client",
          icon: 'error',
        });
        console.error('Erreur API :', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.errorMessage,
        });
      },
    });
  }
}
