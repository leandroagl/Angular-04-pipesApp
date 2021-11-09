import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  argumento: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    /* if (this.argumento === true){
      this.argumento = false;
    } else if (this.argumento === false){
      this.argumento = true;
    } */
    this.argumento = !this.argumento
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;

  }
}
