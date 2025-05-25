import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from '../../../../../../services/Clients/clients.service';
import { MessageService } from 'primeng/api';
import { ClientRequest } from '../../../../../../models/requests/Clients/client-request';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client',
  standalone: false,
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  clientForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialisation du formulaire avec les validations
   */
  initForm(): void {
    this.clientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Vérifie que c'est un nombre
      societe: ['', Validators.required],
      numeroTVA: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
    });
  }

  /**
   * Soumission du formulaire
   */
  onSubmit(): void {
    console.log('Tentative de soumission du formulaire');

    if (this.clientForm.invalid) {
      console.log('Formulaire invalide');
      Object.keys(this.clientForm.controls).forEach((key) => {
        this.clientForm.get(key)?.markAsTouched();
      });
      return;
    }

    console.log('Formulaire valide, envoi des données...');

    this.isLoading = true;
    this.errorMessage = '';

    const clientData: ClientRequest = this.clientForm.value;
    console.log('Données envoyées à l’API :', clientData);

    this.clientService.createClient(clientData).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({
          title: 'Ajout réussi',
          text: 'Le client a été ajouté avec succès',
          icon: 'success',
          draggable: true,
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Ajout réussi',
          detail: 'Le client a été ajouté avec succès',
        });
        this.router.navigate(['/dashboard/clients']);
      },
      error: (error) => {
        this.isLoading = false;
        //this.errorMessage = "Une erreur s'est produite lors de l'ajout du client";
        Swal.fire({
          title: 'Erreur',
          text: "Une erreur s'est produite lors de l'ajout du client",
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
