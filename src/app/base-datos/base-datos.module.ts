import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseDatosPageRoutingModule } from './base-datos-routing.module';

import { BaseDatosPage } from './base-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseDatosPageRoutingModule
  ],
  declarations: [BaseDatosPage]
})
export class BaseDatosPageModule {}
