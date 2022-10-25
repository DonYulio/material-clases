import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseDatosPage } from './base-datos.page';

const routes: Routes = [
  {
    path: '',
    component: BaseDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseDatosPageRoutingModule {}
