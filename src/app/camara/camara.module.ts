import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraPageRoutingModule } from './camara-routing.module';

import { CamaraPage } from './camara.page';

// importar el modulo de la camara
import { Camera } from '@awesome-cordova-plugins/camera/ngx'
import { CamaraService } from './servicio/camara.service';
import { CompartidoModule } from '../compartido/compartido.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraPageRoutingModule,
    CompartidoModule
  ],
  declarations: [CamaraPage],
  providers: [CamaraService]
})
export class CamaraPageModule {}
