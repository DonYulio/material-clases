import { Component } from '@angular/core';
import { RouterName } from './model/router-name';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public readonly rutas: Array<RouterName> = [
    {
      url: 'gps',
      text: 'GPS'
    },
    {
      url: 'camara',
      text: 'Camara'
    },
    {
      url: 'archivo',
      text: 'Archivos'
    },
    {
      url: 'base-datos',
      text: 'Base de datos'
    },
  ]
  constructor() {}
}
