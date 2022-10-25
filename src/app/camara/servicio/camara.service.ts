import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { from } from 'rxjs';
// Librerias necesarias
// npm install @capacitor/camera
// sincronizar el proyecto ionic cap sync
@Injectable({
  providedIn: 'root'
})
export class CamaraService {
  private tienePermiso = false;
  constructor() { }

  public tomarFoto(){
    return from(Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    }));
  }

  public obtenerPermisos(){
    if(!this.tienePermiso){
      from(Camera.requestPermissions())
      .subscribe(resultado => {
        if(resultado){
          this.tienePermiso = true;
        }
      })
    }
  }

}
