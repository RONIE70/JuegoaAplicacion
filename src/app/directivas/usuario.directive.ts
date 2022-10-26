import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Directive({
  selector: '[appUsuario]',
})
export class UsuarioDirective implements OnChanges {
  @Input()
  appUsuario: Mensaje = new Mensaje();

  constructor(private elemento: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.elemento.nativeElement.innerHTML =
      '<p>' +
      this.appUsuario.texto +
      ' <br>' +
      this.appUsuario.usuario +
      '<br> ' +
      this.appUsuario.fecha +
      '</p>';
  }
}
