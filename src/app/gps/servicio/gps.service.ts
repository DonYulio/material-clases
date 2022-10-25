import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { from, Observable } from 'rxjs';
import { Permiso } from 'src/app/model/Permiso';

// librerias necesarias para trabajar
// npm install @capacitor/geolocation
// sincronizar proyecto npx cap sync
@Injectable()
export class GpsService {
  public tienePermisos = false;
  constructor() { }

  public obtenerPosicionActual(): Observable<Position> | null {
    if (!this.tienePermisos) {
      return null;
    }
    return from(Geolocation.getCurrentPosition());
  }

  public seguirPosicion(): Observable<Position> | null {
    if (!this.tienePermisos) {
      return null;
    }
    return new Observable((observer) => {
      if(!this.tienePermisos){
        observer.error('No tienes permiso de GPS');
      }
      let idWatch = '';
      from(Geolocation.watchPosition({
        enableHighAccuracy: true,
        maximumAge: 200,
        timeout: 1000
      }, (pos) => {
        observer.next(pos)
      }))
        .subscribe(id => {
          idWatch = id;
        })

      return {
        unsubscribe() {
          Geolocation.clearWatch({
            id: idWatch
          })
        }
      }
    })
  }

  public solicitarPermiso() {
    if(!this.tienePermisos){
      from(Geolocation.requestPermissions())
      .subscribe(respuesta => {
        if(respuesta){
          this.tienePermisos = true;
        }
      });
    }
  }
}
