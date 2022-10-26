import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { Usuario } from '../../models/usuario.model';
import { JuegosService } from './../../services/juegos.service';
import { Puntaje } from './../../models/puntaje.model';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  usuarioActual: Usuario;
  identificadorUsuario: string;
  puntajeActual:Puntaje[];

  //puntos:Puntaje;
  jugado: number;
  valorAPasar: { nombre: string; mail: string; juego: string; };

  constructor(private miServicio: JuegosService, private route: Router,
    private estadisticaServicio:EstadisticasService) {

    this.identificadorUsuario = localStorage.getItem('email');

    //console.log(JSON.stringify(this.usuarioActual));

    this.estadisticaServicio
      .traerPuntosUsuario(this.identificadorUsuario)
      .subscribe((response: Puntaje[]) => {

        this.puntajeActual = response;

        console.log(JSON.stringify(this.puntajeActual));

        alert(JSON.stringify(response));

      });
  }

  ngOnInit() {
    //this.juegosService.guardaPartida(5,this.usuarioActual.mail,'adivinador');
  }

  selectojuego(numero: number): void {
    switch (numero) {
      case 1: {
        this.jugado = 1;
        this.miServicio.guardaPartida(
          5,
          this.usuarioActual.email,
          'adivinador'
        );
        break;
      }
      case 2: {
        this.jugado = 2;
        this.valorAPasar = {
          nombre: this.usuarioActual.nombre,
          mail: this.usuarioActual.email,
          juego: '2',
        };
        break;
      }
      case 3: {
        this.jugado = 3;
        this.valorAPasar = {
          nombre: this.usuarioActual.nombre,
          mail: this.usuarioActual.email,
          juego: '3',
        };
        break;
      }
    }
  }
}
