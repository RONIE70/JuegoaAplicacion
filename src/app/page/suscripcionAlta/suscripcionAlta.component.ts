import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { Jugador } from '../../models/jugador2.model';
import { CreativaLoginService } from './../../services/creativaLogin.service';

@Component({
  selector: 'app-suscripcionAlta',
  templateUrl: './suscripcionAlta.component.html',
  styleUrls: ['./suscripcionAlta.component.css']
})
export class SuscripcionAltaComponent implements OnInit {
  miUsuario:Usuario;
  jugadorActual: Usuario;
  usuarioActual:Usuario;

  constructor(private service: SuscripcionService, private creaLog:CreativaLoginService) {
    this.usuarioActual = new Usuario();
   // this.creaLog.getData();
  }

  ngOnInit(): void {}

  suscribirBronce(): void {
    this.service.guardaSuscripcion(1);
    Swal.fire({
      title: "Suscripción Activa",
      text: "Podes disfrutar tu membresía: Bronce",
      confirmButtonText: "Aceptar",
  }).then(function () {
    location.href= 'suscripcion'
  });
  }

  suscribirPlata(): void {
    this.service.guardaSuscripcion(2);
    Swal.fire({
      title: "Suscripción Activa",
      text: "Podes disfrutar tu membresía: Plata",
      confirmButtonText: "Aceptar",
  }).then(function () {
    location.href= 'suscripcion'
  });
  }

  suscribirOro(): void {
    this.service.guardaSuscripcion(3);
    Swal.fire({
      title: "Suscripción Activa",
      text: "Podes disfrutar tu membresía: Oro",
      confirmButtonText: "Aceptar",
  }).then(function () {
    location.href= 'suscripcion'
  });
  }
}
