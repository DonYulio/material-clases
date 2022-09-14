import { Component } from '@angular/core';

@Component({
  selector: 'app-uso-ng-switch',
  templateUrl: './uso-ng-switch.component.html',
  styleUrls: ['./uso-ng-switch.component.scss']
})
export class UsoNgSwitchComponent  {
  public opciones: Array<string> = [
    '🍕',
    '🍔',
    '🍟',
    '🌭',
    '🍿',
  ]

  public seleccion: string = 'Nada';

  public cambiarSeleccion({ target }: Event): void {
    const elemento = target as HTMLInputElement;
    this.seleccion = elemento.value;
  }

}
