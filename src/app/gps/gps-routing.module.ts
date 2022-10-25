import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpsPage } from './gps.page';

const routes: Routes = [
  {
    path: '',
    component: GpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsPageRoutingModule {}
