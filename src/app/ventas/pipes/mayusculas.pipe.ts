import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{

  transform(valor: string, enMayus: boolean = true):string {

    if (enMayus){
      return valor.toUpperCase();
    } else{
      return valor.toLocaleLowerCase();
    }
  }
}
