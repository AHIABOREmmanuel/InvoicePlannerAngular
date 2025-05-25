import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationsComponent } from './prestations.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { ListPrestationComponent } from './components/list-prestation/list-prestation.component';
import { EditPrestationComponent } from './components/edit-prestation/edit-prestation.component';  
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsPrestationComponent } from './components/details-prestation/details-prestation.component';

@NgModule({
  declarations: [
    PrestationsComponent,
    AddPrestationComponent,
    ListPrestationComponent,
    EditPrestationComponent,
    DetailsPrestationComponent
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
