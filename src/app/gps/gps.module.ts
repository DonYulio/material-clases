import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsPageRoutingModule } from './gps-routing.module';

import { GpsPage } from './gps.page';
import { GpsService } from './servicio/gps.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsPageRoutingModule
  ],
  declarations: [GpsPage],
  providers: [GpsService]
})
export class GpsPageModule {}
