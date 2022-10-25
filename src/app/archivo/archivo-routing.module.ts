import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivoPage } from './archivo.page';

const routes: Routes = [
  {
    path: '',
    component: ArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivoPageRoutingModule {}
