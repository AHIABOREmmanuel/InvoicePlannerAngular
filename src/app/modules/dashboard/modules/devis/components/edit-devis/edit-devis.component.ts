import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevisService } from '../../../../../../services/devis/devis.service';
import { ClientsService } from '../../../../../../services/Clients/clients.service';
import { PrestationsService } from '../../../../../../services/Prestations/prestations.service';
import { CompletionProfileService } from '../../../../../../services/completionProfile/completion-profile.service';
import { PrestationResponse } from '../../../../../../models/responses/Prestations/prestation-response';
import { ClientResponse } from '../../../../../../models/responses/Clients/client-response';
import { CompanyProfile } from '../../../../../../models/requests/CompanyProfile/CompanyProfile';
import { DevisResponse } from '../../../../../../models/responses/devis/devis-response';
import { GlobalResponse } from '../../../../../../models/responses/Auth/GlobalResponse';
import { environment } from '../../../../../../../environments/environment.development';
import { DevisRequest } from '../../../../../../models/requests/devis/devis-request';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

declare var bootstrap: any;

@Component({
  selector: 'app-edit-devis',
  standalone: false,
  templateUrl: './edit-devis.component.html',
  styleUrls: ['./edit-devis.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EditDevisComponent implements OnInit {
  devisForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  clients: ClientResponse[] = [];
  selectedClient: ClientResponse | null = null;
  companyProfile: CompanyProfile | null = null;
  previewUrl: string = '';
  showPreview = false;
  prestations: PrestationResponse[] = [];
  filteredPrestations: PrestationResponse[] = [];
  searchTermPrestation = '';
  prestationModal: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private devisService: DevisService,
    private clientService: ClientsService,
    private prestationService: PrestationsService,
    private companyProfileService: CompletionProfileService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.devisForm = this.fb.group({
      reference: ['', Validators.required],
      nomProjet: ['', Validators.required],
      description: [''],
      client: ['', Validators.required],
      statut: ['BROUILLON', Validators.required],
      dateEmission: ['', Validators.required],
      dateEcheance: ['', Validators.required],
      prestations: this.fb.array([]),
      tva: [0],
      remise: [0],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.loadDevis();
    this.loadClients();
    this.loadCompanyProfile();
    this.loadPrestations();
    this.initModals();
  }

  private initModals(): void {
    setTimeout(() => {
      this.prestationModal = new bootstrap.Modal(
        document.getElementById('prestationModal')
      );
    }, 500);
  }

  private loadPrestations(): void {
    this.prestationService.findByCreatedBy().subscribe(
      (response) => {
        this.prestations = response || [];
        this.filteredPrestations = [...this.prestations];
        console.log('Prestations chargées:', this.prestations);
      },
      (error) => console.error('Erreur lors du chargement des prestations:', error)
    );
  }

  get prestationsArray() {
    return this.devisForm.get('prestations') as FormArray;
  }

  get totalHT(): number {
    return this.prestationsArray.controls.reduce((total, control) => {
      return total + (control.get('prixTotal')?.value || 0);
    }, 0);
  }

  get montantTVA(): number {
    return (this.totalHT * (this.devisForm.get('tva')?.value || 0)) / 100;
  }

  get montantRemise(): number {
    return (this.totalHT * (this.devisForm.get('remise')?.value || 0)) / 100;
  }

  get totalTTC(): number {
    return this.totalHT + this.montantTVA - this.montantRemise;
  }

  private loadDevis(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.errorMessage = 'ID du devis non trouvé';
      return;
    }

    this.isLoading = true;
    this.devisService.findByTrackingId(id).subscribe({
      next: (response: GlobalResponse<DevisResponse>) => {
        const devis = response.data;
        this.devisForm.patchValue({
          reference: devis.reference,
          nomProjet: devis.nomProjet,
          description: devis.description,
          client: devis.clientName,
          statut: devis.statut,
          dateEmission: devis.dateEmission,
          dateEcheance: devis.dateEcheance,
          tva: devis.tva,
          remise: devis.remise,
          notes: devis.notes
        });

        this.selectedClient = {
          trackingId: devis.clientTrackingId,
          nom: devis.clientName,
          email: devis.clientEmail
        } as ClientResponse;

        this.prestationsArray.clear();
        devis.prestations.forEach((prestation: PrestationResponse) => {
          this.prestationsArray.push(this.fb.group({
            trackingId: [prestation.trackingId],
            designation: [prestation.designation],
            description: [prestation.description],
            prixUnitaire: [prestation.prixUnitaire],
            duree: [prestation.duree],
            prixTotal: [prestation.prixTotal]
          }));
        });

        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Erreur lors du chargement du devis';
        this.isLoading = false;
        console.error('Erreur:', error);
      }
    });
  }

  private loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (response: any) => {
        this.clients = response.data || response._embedded.clients;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des clients:', error);
      }
    });
  }

  private loadCompanyProfile(): void {
    this.companyProfileService.getProfile().subscribe({
      next: (profile: CompanyProfile) => {
        this.companyProfile = profile;
        if (profile.hasLogo) {
          this.previewUrl = `${environment.apiUrl}/api/profile/logo/${profile.trackingId}`;
        }
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement du profil entreprise:', error);
      }
    });
  }

  openClientModal(): void {
    // TODO: Implémenter l'ouverture de la modal de sélection de client
  }

  openPrestationModal(): void {
    this.searchTermPrestation = '';
    this.filteredPrestations = [...this.prestations];
    console.log(
      'Ouverture modal prestations, prestations disponibles:',
      this.filteredPrestations.length
    );
    this.prestationModal.show();
  }

  selectPrestation(prestation: PrestationResponse): void {
    const id = prestation.trackingId || this.generateTrackingId();
    const prestationGroup = this.fb.group({
      trackingId: [id, Validators.required],
      designation: [prestation.designation, Validators.required],
      description: [prestation.description || ''],
      prixUnitaire: [prestation.prixUnitaire, [Validators.required, Validators.min(0)]],
      duree: [1, [Validators.required, Validators.min(0.1)]],
      prixTotal: [prestation.prixUnitaire, Validators.required]
    });
    this.prestationsArray.push(prestationGroup);
    this.updateTotals();
    this.prestationModal.hide();
    console.log('Prestation sélectionnée ajoutée:', prestation, 'index:', this.prestationsArray.length - 1);
  }

  private generateTrackingId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addEmptyPrestation(): void {
    const prestationGroup = this.fb.group({
      trackingId: [this.generateTrackingId(), Validators.required],
      designation: ['', Validators.required],
      description: [''],
      prixUnitaire: [0, [Validators.required, Validators.min(0)]],
      duree: [1, [Validators.required, Validators.min(0.1)]],
      prixTotal: [0, Validators.required]
    });
    this.prestationsArray.push(prestationGroup);
    console.log('Nouvelle prestation vide ajoutée:', prestationGroup.value);
    this.updateTotals();
  }

  removePrestation(index: number): void {
    this.prestationsArray.removeAt(index);
    console.log(
      'Suppression prestation index:', index,
      'prestations restantes:', this.prestationsArray.value
    );
    this.updateTotals();
  }

  updatePrestationTotal(index: number): void {
    const prestation = this.prestationsArray.at(index);
    const prixUnitaire = prestation.get('prixUnitaire')?.value || 0;
    const duree = prestation.get('duree')?.value || 0;
    const prixTotal = prixUnitaire * duree;
    prestation.get('prixTotal')?.setValue(prixTotal);
    console.log('Mise à jour du total pour la prestation:', {
      index,
      prixUnitaire,
      duree,
      prixTotal
    });
    this.updateTotals();
  }

  updateTotals(): void {
    // Les getters calculent automatiquement les totaux
    console.log('Mise à jour des totaux:', {
      totalHT: this.totalHT,
      montantTVA: this.montantTVA,
      montantRemise: this.montantRemise,
      totalTTC: this.totalTTC
    });
  }

  previewDevis(): void {
    this.showPreview = true;
  }

  onSubmit(): void {
    if (this.devisForm.invalid || !this.selectedClient) {
      this.errorMessage = 'Veuillez sélectionner un client';
      return;
    }

    this.isLoading = true;
    const devisData: DevisRequest = {
      reference: this.devisForm.get('reference')?.value,
      nomProjet: this.devisForm.get('nomProjet')?.value,
      description: this.devisForm.get('description')?.value,
      client: this.selectedClient,
      dateEmission: this.devisForm.get('dateEmission')?.value,
      dateEcheance: this.devisForm.get('dateEcheance')?.value,
      prixTotal: this.totalHT,
      prixTTC: this.totalTTC,
      tva: this.devisForm.get('tva')?.value,
      remise: this.devisForm.get('remise')?.value,
      statut: this.devisForm.get('statut')?.value,
      notes: this.devisForm.get('notes')?.value,
      prestations: this.prestationsArray.controls.map(control => ({
        trackingId: control.get('trackingId')?.value,
        designation: control.get('designation')?.value,
        description: control.get('description')?.value,
        prixUnitaire: control.get('prixUnitaire')?.value,
        duree: control.get('duree')?.value,
        prixTotal: control.get('prixTotal')?.value
      }))
    };

    console.log('Données envoyées:', JSON.stringify(devisData, null, 2));

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.errorMessage = 'ID du devis non trouvé';
      this.isLoading = false;
      return;
    }

    this.devisService.update(id, devisData).subscribe({
      next: (response) => {
        console.log('Réponse du serveur:', response);
        this.router.navigate(['/dashboard/devis']);
      },
      error: (error: any) => {
        console.error('Erreur complète:', error);
        console.error('Détails de l\'erreur:', error.error);
        this.errorMessage = 'Erreur lors de la mise à jour du devis: ' + (error.error?.message || error.message);
        this.isLoading = false;
      }
    });
  }

  deleteDevis(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.errorMessage = 'ID du devis non trouvé';
      return;
    }

    this.confirmationService.confirm({
      message: `Êtes-vous sûr de vouloir supprimer ce devis ?`,
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui, supprimer',
      rejectLabel: 'Non, annuler',
      accept: () => {
        this.isLoading = true;
        this.devisService.deleteDevis(id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Devis supprimé avec succès'
            });
            this.router.navigate(['/dashboard/devis']);
          },
          error: (error) => {
            this.isLoading = false;
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: `Erreur lors de la suppression du devis: ${error.error?.message || 'Erreur inconnue'}`
            });
            console.error('Erreur de suppression:', error);
          }
        });
      }
    });
  }
}
