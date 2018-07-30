import { Component } from '@angular/core';

/**
 * Generated class for the PantallaInicioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pantalla-inicio',
  templateUrl: 'pantalla-inicio.html'
})
export class PantallaInicioComponent {

  text: string;

  constructor() {
    console.log('Hello PantallaInicioComponent Component');
    this.text = 'Hello World';
  }

}
