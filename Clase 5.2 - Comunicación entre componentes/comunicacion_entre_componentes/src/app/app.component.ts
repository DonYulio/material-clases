import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contadorUno: number = 30;
  public contadorDos: number = 40;

  public escucharHijoUno(valor: number): void {
    this.contadorUno = valor;
  }
  public escucharHijoDos(valor: number): void {
    this.contadorDos = valor;
  }
}
