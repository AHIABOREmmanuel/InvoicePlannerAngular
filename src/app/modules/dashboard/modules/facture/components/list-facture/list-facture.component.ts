import { Component, OnInit } from '@angular/core';
import { FactureService } from '../../../../../../services/facture/facture.service';
import { FactureResponse } from '../../../../../../models/responses/facture/facture-response';
import { Router } from '@angular/router';
import { CompletionProfileService } from '../../../../../../services/completionProfile/completion-profile.service';
import { CompanyProfile } from '../../../../../../models/requests/CompanyProfile/CompanyProfile';
import { ClientsService } from '../../../../../../services/Clients/clients.service';
import { ClientResponse } from '../../../../../../models/responses/Clients/client-response';
import { catchError, finalize, of } from 'rxjs';
import Swal from 'sweetalert2';
import html2pdf from 'html2pdf.js';

declare var bootstrap: any;

@Component({
  selector: 'app-list-facture',
  standalone: false,
  templateUrl: './list-facture.component.html',
  styleUrl: './list-facture.component.css'
})
export class ListFactureComponent implements OnInit {
  factures: FactureResponse[] = [];
  clients: ClientResponse[] = [];
  isLoading = false;
  errorMessage: string | null = null;
  activeFilter: string = 'tous';
  searchTerm: string = '';
  filteredFactures: FactureResponse[] = [];
  selectedFacture: FactureResponse | null = null;
  companyProfile: CompanyProfile | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  // Ajout d'une propriété pour stocker le client lié à la facture sélectionnée
  selectedClient: ClientResponse | null = null;

  constructor(
    private factureService: FactureService,
    private companyProfileService: CompletionProfileService,
    private clientService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFactures();
    this.loadCompanyProfile();
    // this.loadClients();
  }

  private loadCompanyProfile(): void {
    this.companyProfileService
      .getProfile()
      .pipe(
        catchError((err) => {
          console.error('Erreur lors du chargement du profil:', err);
          return of(null);
        })
      )
      .subscribe((profile) => {
        if (profile) {
          this.companyProfile = profile;
          if (profile.trackingId && profile.hasLogo) {
            this.updatePreviewUrl(profile.trackingId);
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
        }
      });
  }

  loadFactures(): void {
    this.isLoading = true;
    this.factureService.findAll().subscribe({
      next: (response) => {
        this.factures = response.data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des factures';
        this.isLoading = false;
        console.error('Erreur:', error);
      }
    });
  }

  applyFilters(): void {
    let result = this.factures;

    if (this.activeFilter !== 'tous') {
      result = this.factures.filter(f => f.etat === this.activeFilter);
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const search = this.searchTerm.toLowerCase().trim();
      result = result.filter(f =>
        f.numero.toLowerCase().includes(search) ||
        f.clientName.toLowerCase().includes(search) ||
        f.referenceDevis.toLowerCase().includes(search)
      );
    }

    this.filteredFactures = result;
  }

  filterFactures(status: string): void {
    this.activeFilter = status;
    this.applyFilters();
  }

  downloadFacture(facture: FactureResponse): void {
    // TODO: Implémenter le téléchargement de la facture
    Swal.fire({
      icon: 'info',
      title: 'Information',
      text: 'La fonctionnalité de téléchargement sera bientôt disponible'
    });
  }

  deleteFacture(facture: FactureResponse): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Voulez-vous vraiment supprimer la facture ${facture.numero} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annuler',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Implémenter la suppression de la facture
        Swal.fire({
          icon: 'info',
          title: 'Information',
          text: 'La fonctionnalité de suppression sera bientôt disponible'
        });
      }
    });
  }

  /**
   * Ouvre la modale de détails de la facture et récupère l'objet client lié à la facture via le ClientService.
   */
  openDetailsModal(facture: FactureResponse): void {
    this.selectedFacture = facture;
    this.selectedClient = null; // Réinitialiser le client sélectionné

    // On suppose que la facture possède un champ clientTrackingId ou similaire pour identifier le client
    // Si ce champ s'appelle différemment, il faut l'adapter ici
    const clientTrackingId = facture.clientTrackingId;

    if (clientTrackingId) {
      this.clientService.getClientById(clientTrackingId)
        .pipe(
          catchError((err) => {
            console.error('Erreur lors de la récupération du client lié à la facture:', err);
            return of(null);
          })
        )
        .subscribe((response) => {
          if (response && response) {
            this.selectedClient = response;
            console.log('Client lié à la facture:', this.selectedClient);
          } else {
            this.selectedClient = null;
          }
        });
    } else {
      this.selectedClient = null;
    }

    // Ouvre la modale Bootstrap
    const modalElement = document.getElementById('factureDetailsModal');
    if (modalElement) {
      // @ts-ignore: Bootstrap's Modal is not fully typed by default
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  editFacture(id: string): void {
    this.router.navigate(['/dashboard/factures/edit-facture', id]);
  }

  updateFactureStatus(facture: FactureResponse): void {
    this.factureService.updateStatus(facture.trackingId, facture.etat).subscribe({
      next: () => {
        this.loadFactures();
      }
    });
  }
  
  exportToPDF(): void {
    if (!this.selectedFacture) return;
    const element = document.getElementById('facture-preview-pdf');
    if (!element) return;
    const opt = {
      margin:       0.5,
      filename:     `Facture_${this.selectedFacture.numero}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }
}
