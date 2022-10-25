import { Component, OnInit } from '@angular/core';
import { FileInfo } from '@capacitor/filesystem';
import { TouchSequence } from 'selenium-webdriver';
import { ArchivosService } from '../compartido/servicio/archivos.service';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.page.html',
  styleUrls: ['./archivo.page.scss'],
})
export class ArchivoPage implements OnInit {
  public fotos = [];
  constructor(
    private archivosServices: ArchivosService
  ) { }

  async ngOnInit() {

  }

  ionViewWillEnter(){
    // this.archivosServices.solicitarPermiso();
    this.fotos = [];
    this.archivosServices.solicitarPermiso();
    this.archivosServices.listarArchivos()
    .subscribe(async archivos => {
      for(let archivo of archivos.files){
        const foto = await this.archivosServices.obtenerArchivo(archivo.name);
        this.fotos.push(`data:image/jpge;base64,${foto}`);
      }
    });
  }

}
