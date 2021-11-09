import { Component, OnInit }     from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Susana';
  nombre2: string = 'Alberto'
  genero: string = 'femenino';
  genero2: string = 'masculino';
  submit: boolean = false;

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Alberto','Jose','Amanda'];

  clientesMapa = {
    '=0'   : 'no tenemos ningun cliente esperando.',
    '=1'   : 'tenemos 1 cliente esperando.',
    '=2'   : 'tenemos 2 clientes esperand.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  cambiarPersona(){
    if (this.nombre === 'Susana'){
      this.nombre = 'Alberto'
      this.genero = 'masculino';
    } else if (this.nombre === 'Alberto'){
      this.nombre = 'Susana';
      this.genero = 'femenino'
    }
  }

  cambiarCliente(){
    this.clientes.shift();

  }

  // KeyValue Pipe
  persona = {
    nombre: 'Leandro',
    edad: 20,
    direccion: 'Buenos Aires, Argentina'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ]

  // Async Pipe
  myObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{

    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
