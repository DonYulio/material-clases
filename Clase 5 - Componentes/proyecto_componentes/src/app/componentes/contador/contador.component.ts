import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent  {
  public contador: number = 0;
  public aumentar(): void {
    this.contador += 1;
  }
}
