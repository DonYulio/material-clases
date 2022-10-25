import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { from } from 'rxjs';
import { v4 } from 'uuid';
// Instalar npm install @capacitor/filesystem
// Permisos en AndroidManifest.xml
/**
 * <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
 * <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
 */
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  private tienePermiso = false;
  private carpeta = 'app-nativas';
  constructor() { }

  public solicitarPermiso(){
    return from(Filesystem.requestPermissions())
    .subscribe(respuesta => {
      if(respuesta){
        this.tienePermiso = true;
        // creamos la carpeta
        from(Filesystem.mkdir({
          path: this.carpeta,
          directory: Directory.External,
          recursive: false
        }))
        .subscribe()
      }
    })
  }

  public guardarFoto(foto: string){
    return from(Filesystem.writeFile({
      path: `${this.carpeta}/${v4()}.jpg`,
      directory: Directory.External,
      data: foto
    }))
  }

  public listarArchivos(){
    return from(Filesystem.readdir({
      path: this.carpeta,
      directory: Directory.External
    }));

  }

  public async obtenerArchivo(foto: string): Promise<string>{
    const file = await Filesystem.readFile({
      path: `${this.carpeta}/${foto}`,
      directory: Directory.External
    })
    return file.data
  }
}
