import { Component, OnInit } from '@angular/core';
import { ArchivosService } from '../compartido/servicio/archivos.service';
import { CamaraService } from './servicio/camara.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  public foto: string = '';
  constructor(
    private camaraService: CamaraService,
    private archivos: ArchivosService
  ) { }

  ngOnInit(): void {
    // this.camaraService.obtenerPermisos();
    // this.archivos.solicitarPermiso();
  }

  ionViewWillEnter(){
    this.camaraService.obtenerPermisos();
    this.archivos.solicitarPermiso();
  }

  public tomarFoto(){
    this.camaraService.tomarFoto()
    .subscribe(foto => {
      console.log(foto.format);
      console.log(foto.format);
      this.foto = `data:image/jpge;base64,${foto.base64String}`;
    })
  }

  public guardarImagen(){
    this.archivos.guardarFoto(this.foto)
    .subscribe(() => {
      this.foto = '';
    })
  }

}
