import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})

export class VuelaPipe implements PipeTransform{

  transform(arg: boolean = true): string{

    return (arg) ? 'vuela' : 'no vuela';

  }
}
