import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower   : string = 'leandro';
  nombreUpper   : string = 'LEANDRO';
  nombreCompleto: string = 'leAndRo AguiLeRa';

  fecha: Date = new Date();



}
