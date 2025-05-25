import { Component, OnInit } from '@angular/core';
import { DevisService } from '../../../../../../services/devis/devis.service';
import { DevisResponse } from '../../../../../../models/responses/devis/devis-response';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-devis',
  standalone: false,
  templateUrl: './list-devis.component.html',
  styleUrl: './list-devis.component.css'
})
export class ListDevisComponent implements OnInit {
  devis: DevisResponse[] = [];
  isLoading = false;
  errorMessage: string | null = null;
  activeFilter: string = 'tous';
  searchTerm: string = '';
  filteredDevis: DevisResponse[] = [];
  selectedDevis: DevisResponse | null = null;

  constructor(
    private devisService: DevisService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDevis();
  }

  private loadDevis() {
    this.isLoading = true;
    this.errorMessage = null;
    this.devisService.findByCreatedBy().subscribe({
      next: (response) => {
        this.devis = response.data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des devis:', error);
        this.errorMessage = "Erreur lors du chargement des devis. Veuillez réessayer.";
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: this.errorMessage
        });
      }
    });
  }

  updateDevisStatus(devis: DevisResponse): void {
    const oldStatus = devis.statut;
    this.devisService.updateDevisStatus(devis.trackingId, devis.statut).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: `Statut du devis ${devis.reference} mis à jour avec succès`,
          timer: 2000,
          showConfirmButton: false
        });
        this.loadDevis();
      },
      error: (error) => {
        devis.statut = oldStatus; // Restaurer l'ancien statut en cas d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: `Erreur lors de la mise à jour du statut: ${error.error?.message || 'Erreur inconnue'}`
        });
        console.error('Erreur de mise à jour du statut:', error);
      }
    });
  }

  convertToFacture(devis: DevisResponse): void {
    if (devis.statut !== 'accepte') {
      Swal.fire({
        icon: 'warning',
        title: 'Attention',
        text: 'Seuls les devis acceptés peuvent être convertis en facture'
      });
      return;
    }

    Swal.fire({
      title: 'Confirmation',
      text: `Êtes-vous sûr de vouloir convertir le devis ${devis.reference} en facture ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, convertir',
      cancelButtonText: 'Non, annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        this.devisService.convertToFacture(devis.trackingId).subscribe({
          next: (factureId) => {
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Devis converti en facture avec succès',
              timer: 2000,
              showConfirmButton: false
            }).then(() => {
              this.router.navigate(['/dashboard/factures/details', factureId]);
            });
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'Erreur lors de la conversion en facture'
            });
            console.error('Erreur de conversion:', error);
          }
        });
      }
    });
  }

  downloadDevis(devis: DevisResponse): void {
    this.devisService.downloadDevisPDF(devis.trackingId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Devis_${devis.reference}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Erreur lors du téléchargement du PDF'
        });
        console.error('Erreur de téléchargement:', error);
      }
    });
  }

  deleteDevis(devis: DevisResponse): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Voulez-vous vraiment supprimer le devis ${devis.reference} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annuler',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isLoading = true;
        this.devisService.deleteDevis(devis.trackingId).subscribe({
          next: (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Supprimé !',
              text: `Le devis ${devis.reference} a été supprimé avec succès`,
              timer: 2000,
              showConfirmButton: false
            });
            this.loadDevis();
          },
          error: (error) => {
            this.isLoading = false;
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: `Erreur lors de la suppression du devis: ${error.error?.message || 'Erreur inconnue'}`
            });
            console.error('Erreur de suppression:', error);
          }
        });
      }
    });
  }

  filterDevis(status: string): void {
    this.activeFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    // D'abord filtrer par statut
    let result = this.devis;

    if (this.activeFilter !== 'tous') {
      result = this.devis.filter(d => d.statut === this.activeFilter);
    }
    else{
      result = this.devis;
    }

    // Ensuite appliquer la recherche textuelle
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const search = this.searchTerm.toLowerCase().trim();
      result = result.filter(d =>
        d.nomProjet.toLowerCase().includes(search) ||
        d.reference.toLowerCase().includes(search) ||
        (d.clientName && d.clientName.toLowerCase().includes(search))
      );
    }

    this.filteredDevis = result;
  }

  openDetailsModal(devis: DevisResponse): void {
    this.selectedDevis = devis;
    console.log(this.selectedDevis);
  }

  addDevis(): void {
    this.router.navigate(['add-devis']);
  }

  editDevis(id: string): void {
    this.router.navigate(['edit-devis', id]);
  }
}
