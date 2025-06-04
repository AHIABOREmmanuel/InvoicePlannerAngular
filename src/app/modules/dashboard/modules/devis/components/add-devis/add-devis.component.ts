import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevisRequest } from '../../../../../../models/requests/devis/devis-request';
import { ClientResponse } from '../../../../../../models/responses/Clients/client-response';
import { PrestationResponse } from '../../../../../../models/responses/Prestations/prestation-response';
import { ClientsService } from '../../../../../../services/Clients/clients.service';
import { DevisService } from '../../../../../../services/devis/devis.service';
import { PrestationsService } from '../../../../../../services/Prestations/prestations.service';
import { catchError, finalize, of } from 'rxjs';
import { CompanyProfile } from '../../../../../../models/requests/CompanyProfile/CompanyProfile';
import { CompletionProfileService } from '../../../../../../services/completionProfile/completion-profile.service';

declare var bootstrap: any;

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.scss'],
  standalone: false,
})
export class AddDevisComponent implements OnInit {
[x: string]: any;
  devisForm: FormGroup;
  clients: ClientResponse[] = [];
  filteredClients: ClientResponse[] = [];
  prestations: PrestationResponse[] = [];
  filteredPrestations: PrestationResponse[] = [];
  selectedClient: ClientResponse | null = null;
  companyProfile: CompanyProfile | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  today: string = new Date().toISOString().split('T')[0];
  todayPlusOneMonth: string = (() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split('T')[0];
  })();

  loading = false;
  showPreview = false;
  searchTermClient = '';
  searchTermPrestation = '';

  // Totaux calculés
  totalHT = 0;
  montantTVA = 0;
  montantRemise = 0;
  totalTTC = 0;

  // Modals
  clientModal: any;
  prestationModal: any;
  previewModal: any;

  errorMessage = '';

  selectedPrestations: PrestationResponse[] = [];

  constructor(
    private fb: FormBuilder,
    private devisService: DevisService,
    private clientsService: ClientsService,
    private prestationsService: PrestationsService,
    private companyProfileService: CompletionProfileService,
    private router: Router
  ) {
    this.devisForm = this.fb.group({
      reference: ['', Validators.required],
      nomProjet: ['', Validators.required],
      description: [''],
      client: [null, Validators.required],
      dateEmission: [new Date(), Validators.required],
      dateEcheance: [this.addDays(new Date(), 30), Validators.required],
      prixTotal: [0, Validators.required],
      prixTTC: [0, Validators.required],
      tva: [20, Validators.required],
      remise: [0, Validators.required],
      statut: ['BROUILLON', Validators.required],
      notes: [''],
      prestations: this.fb.array([])
    });
    console.log('Formulaire initialisé:', this.devisForm.value);
  }

  ngOnInit(): void {
    console.log('ngOnInit AddDevisComponent');
    this.loadClients();
    this.loadPrestations();
    this.loadCompanyProfile();
    this.initModals();
    console.log('Formulaire après init (avant référence):', this.devisForm.value);

    const today = new Date();
    const generatedRef = `DEV-${today.getFullYear()}${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${this.generateRandomReference()}`;
    console.log('Référence générée:', generatedRef);
    this.devisForm.patchValue({ reference: generatedRef });
  }

  private loadCompanyProfile(): void {
    console.log('Chargement du profil...');
    this.loading = true;
    this.companyProfileService
      .getProfile()
      .pipe(
        catchError((err) => {
          console.error('Erreur lors du chargement du profil:', err);
          if (err.status !== 404) {
            this.errorMessage = 'Erreur lors du chargement du profil';
          }
          return of(null);
        }),
        finalize(() => {
          this.loading = false;
          console.log('Fin du chargement du profil');
        })
      )
      .subscribe((profile) => {
        console.log('Profil récupéré:', profile);
        if (profile) {
          this.companyProfile = profile;
          if (profile.trackingId && profile.hasLogo) {
            console.log("Le profil a un logo, mise à jour de l'URL de prévisualisation");
            this.updatePreviewUrl(profile.trackingId);
          } else {
            console.log("Le profil n'a pas de logo ou pas de trackingId:", profile);
          }
        }
      });
  }

  private updatePreviewUrl(profileId: string): void {
    this.companyProfileService
      .getLogoImage(profileId)
      .pipe(
        catchError((err) => {
          console.error('Erreur lors du chargement du logo:', err);
          return of(null);
        })
      )
      .subscribe((blob) => {
        if (blob) {
          this.previewUrl = URL.createObjectURL(blob);
          console.log('Preview logo URL (cache bust):', this.previewUrl);
        }
      });
  }

  private initModals(): void {
    setTimeout(() => {
      this.clientModal = new bootstrap.Modal(
        document.getElementById('clientModal')
      );
      this.prestationModal = new bootstrap.Modal(
        document.getElementById('prestationModal')
      );
      this.previewModal = new bootstrap.Modal(
        document.getElementById('previewModal')
      );
      console.log('Modals initialisés:', {
        clientModal: this.clientModal,
        prestationModal: this.prestationModal,
        previewModal: this.previewModal
      });
    }, 500);
  }

  private loadClients(): void {
    this.clientsService.getClients().subscribe(
      (response) => {
        this.clients = response || [];
        this.filteredClients = [...this.clients];
        console.log('Clients chargés:', this.clients);
      },
      (error) =>
        console.error('Erreur lors du chargement des clients:', error)
    );
  }

  private loadPrestations(): void {
    this.prestationsService.findByCreatedBy().subscribe(
      (response) => {
        this.prestations = response || [];
        this.filteredPrestations = [...this.prestations];
        console.log('Prestations chargées:', this.prestations);
      },
      (error) =>
        console.error('Erreur lors du chargement des prestations:', error)
    );
  }

  get prestationsArray(): FormArray {
    const arr = this.devisForm.get('prestations') as FormArray;
    console.log('Accès au FormArray des prestations:', arr.value);
    return arr;
  }

  addEmptyPrestation(): void {
    const prestationGroup = this.fb.group({
      designation: ['', Validators.required],
      description: [''],
      prixUnitaire: [0, [Validators.required, Validators.min(0)]],
      duree: [1, [Validators.required, Validators.min(0.1)]],
      prixTotal: [0, Validators.required]
    });
    this.prestationsArray.push(prestationGroup);
    console.log("Ajout d'une prestation vide, index:",
      this.prestationsArray.length - 1,
      this.prestationsArray.value);
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
    const prestationGroup = this.prestationsArray.at(index) as FormGroup;
    const prixUnitaire = prestationGroup.get('prixUnitaire')?.value || 0;
    const duree = prestationGroup.get('duree')?.value || 0;
    const total = prixUnitaire * duree;

    prestationGroup.patchValue({ prixTotal: total });
    console.log(
      `Mise à jour prestation ${index}, prixUnitaire: ${prixUnitaire},`,
      `durée: ${duree}, total: ${total}`
    );
    this.updateTotals();
  }

  openClientModal(): void {
    this.searchTermClient = '';
    this.filteredClients = [...this.clients];
    console.log(
      'Ouverture modal clients, clients disponibles:',
      this.filteredClients.length
    );
    this.clientModal.show();
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

  filterClients(): void {
    const term = this.searchTermClient.toLowerCase();
    this.filteredClients = this.clients.filter((client) =>
      client.nom.toLowerCase().includes(term) ||
      client.email.toLowerCase().includes(term) ||
      (client.societe && client.societe.toLowerCase().includes(term))
    );
    console.log(`Recherche client "${term}", résultats:`, this.filteredClients);
  }

  filterPrestations(): void {
    const term = this.searchTermPrestation.toLowerCase();
    this.filteredPrestations = this.prestations.filter((prestation) =>
      prestation.designation.toLowerCase().includes(term) ||
      (prestation.description &&
        prestation.description.toLowerCase().includes(term))
    );
    console.log(
      `Recherche prestation "${term}", résultats:`,
      this.filteredPrestations
    );
  }

  previewDevis(): void {
    this.showPreview = true;
    console.log('Aperçu du devis généré:', this.devisForm.value);
    this.previewModal.show();
  }

  exportToPDF(): void {
    console.log('Export PDF demandé pour le devis:', this.devisForm.value);
    alert("Fonctionnalité d'export en PDF à implémenter");
  }

  onSubmit(): void {
    if (this.devisForm.invalid || !this.selectedClient) {
      if (!this.selectedClient) {
        this.devisForm.get('client')?.markAsTouched();
        this.errorMessage = 'Veuillez sélectionner un client';
      }
      return;
    }

    this.loading = true;
    const formValue = this.devisForm.value;

    // Formatter les prestations correctement, inclure trackingId et uniquement celles sélectionnées
    const prestationsFormatted = formValue.prestations
      .filter((p: any) => p.trackingId)
      .map((p: any) => ({
        trackingId: p.trackingId,
        designation: p.designation,
        description: p.description,
        prixUnitaire: p.prixUnitaire,
        duree: p.duree,
        prixTotal: p.prixTotal
      }));

    const devisRequest: DevisRequest = {
      reference: formValue.reference,
      nomProjet: formValue.nomProjet,
      description: formValue.description,
      client: this.selectedClient,
      dateEmission: formValue.dateEmission,
      dateEcheance: formValue.dateEcheance,
      prixTotal: formValue.prixTotal,
      prixTTC: formValue.prixTTC,
      tva: formValue.tva,
      remise: formValue.remise,
      statut: formValue.statut,
      notes: formValue.notes,
      prestations: prestationsFormatted
    };

    console.log('Requête de création du devis avec prestations (incluant trackingId):', devisRequest);

    this.devisService.create(devisRequest).subscribe(
      response => {
        this.loading = false;
        console.log('Devis créé avec succès:', response);
        alert('Devis créé avec succès!');
        this.router.navigate(['/dashboard/devis']);
      },
      error => {
        this.loading = false;
        console.error('Erreur lors de la création du devis:', error);
        alert('Une erreur est survenue lors de la création du devis: ' + (error.error?.message || 'Erreur inconnue'));
      }
    );
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    console.log(
      `addDays: date initiale ${date}, jours ajoutés ${days}, résultat ${result}`
    );
    return result;
  }

  private generateRandomReference(): string {
    const ref = Math.floor(100 + Math.random() * 900).toString();
    console.log('generateRandomReference:', ref);
    return ref;
  }

  selectClient(client: ClientResponse): void {
    this.selectedClient = client;
    this.devisForm.get('client')?.setValue(client);
    this.devisForm.get('client')?.updateValueAndValidity();
    console.log('Client sélectionné et formulaire mis à jour:', client, this.devisForm.value);
    this.clientModal.hide();
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
    console.log('Prestation sélectionnée ajoutée:', prestation, 'index:', this.prestationsArray.length - 1);
  }

  generateTrackingId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  isPrestationSelected(prestation: PrestationResponse): boolean {
    return this.selectedPrestations.some(p => p.trackingId === prestation.trackingId);
  }

  togglePrestationSelection(prestation: PrestationResponse): void {
    const index = this.selectedPrestations.findIndex(p => p.trackingId === prestation.trackingId);
    if (index === -1) {
      this.selectedPrestations.push(prestation);
    } else {
      this.selectedPrestations.splice(index, 1);
    }
  }

  addSelectedPrestations(): void {
    this.selectedPrestations.forEach(prestation => {
      const prestationForm = this.fb.group({
        designation: [prestation.designation],
        description: [prestation.description],
        prixUnitaire: [prestation.prixUnitaire],
        duree: [1],
        prixTotal: [prestation.prixUnitaire]
      });
      this.prestationsArray.push(prestationForm);
    });
    this.updateTotals();
    this.selectedPrestations = [];
    this.closePrestationModal();
  }

  closePrestationModal(): void {
    const modal = document.getElementById('prestationModal');
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }

  updateTotals(): void {
    this.totalHT = this.prestationsArray.controls.reduce(
      (sum, control) => sum + (control.get('prixTotal')?.value || 0),
      0
    );

    const tvaRate = this.devisForm.get('tva')?.value || 0;
    this.montantTVA = (this.totalHT * tvaRate) / 100;

    const remiseRate = this.devisForm.get('remise')?.value || 0;
    this.montantRemise = (this.totalHT * remiseRate) / 100;

    this.totalTTC = this.totalHT + this.montantTVA - this.montantRemise;

    this.devisForm.patchValue({
      prixTotal: this.totalHT,
      prixTTC: this.totalTTC
    });
  }
}
