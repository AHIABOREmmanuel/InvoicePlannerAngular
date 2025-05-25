import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture.component';
import { ListFactureComponent } from './components/list-facture/list-facture.component';

const routes: Routes = [{ path: '', component: ListFactureComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
