import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { FactureComponent } from './facture.component';
import { AddFactureComponent } from './components/add-facture/add-facture.component';
import { ListFactureComponent } from './components/list-facture/list-facture.component';
import { EditFactureComponent } from './components/edit-facture/edit-facture.component';


@NgModule({
  declarations: [
    FactureComponent,
    AddFactureComponent,
    ListFactureComponent,
    EditFactureComponent
  ],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
