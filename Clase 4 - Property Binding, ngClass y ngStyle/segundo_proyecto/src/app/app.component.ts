import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imagen: string = 'https://picsum.photos/200/300';
  public valorActual: number = 0;
  public ancho: number = 0;
  public alto: number = 0;
  public valorBarra: number = 0;
  public tamanioFuente: number = 10;
  public color: string = '';
  public cambiarValorActual(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.valorActual = Number.parseInt(elemento.value) || 0;
  }
  public cambiarAncho(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.ancho = Number.parseInt(elemento.value) || 0;
  }
  public cambiarAlto(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.alto = Number.parseInt(elemento.value) || 0;
  }
  public cambiarValorBarra(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.valorBarra = Number.parseInt(elemento.value) || 0;
  }
  public cambiarFuente(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.tamanioFuente = Number.parseInt(elemento.value) || 0;
  }
  public cambiarColor(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.color = elemento.value;
  }
}
