import { Component, OnInit } from '@angular/core';
import { GpsService } from './servicio/gps.service';
import { Position } from '@capacitor/geolocation';
@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
  public coordenadas!: Position;
  constructor(
    private gpsService: GpsService
  ) { }

  ngOnInit() {

  }

  public ionViewWillEnter() {
    this.gpsService.solicitarPermiso();
  }

  public obtenerUbicacion(){
    this.gpsService.obtenerPosicionActual()
    .subscribe(pos => {
      this.coordenadas = pos;
    })
  }


}
