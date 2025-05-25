import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsClientComponent } from './components/details-client/details-client.component';

@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    ListClientComponent,
    EditClientComponent,
    DetailsClientComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ClientsModule {}
