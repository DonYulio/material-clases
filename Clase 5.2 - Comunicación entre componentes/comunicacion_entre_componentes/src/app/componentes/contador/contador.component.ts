import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent  {
  @Input() public valorInicial: number = 0;
  @Output() nuevoValor= new EventEmitter<number>();

  public emitirAumento(): void {
    this.nuevoValor.emit(this.valorInicial + 1);
  }
}
