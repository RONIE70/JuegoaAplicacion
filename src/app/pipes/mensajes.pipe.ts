import { Pipe, PipeTransform } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Pipe({
  name: 'mensajes'
})
export class MensajesPipe implements PipeTransform {

  transform(value:Mensaje): string {
    return value.usuario + '   ' + value.texto;
  }

}
