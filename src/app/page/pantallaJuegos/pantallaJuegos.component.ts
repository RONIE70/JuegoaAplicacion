import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-pantallaJuegos',
  templateUrl: './pantallaJuegos.component.html',
  styleUrls: ['./pantallaJuegos.component.css'],
})
export class PantallaJuegosComponent implements OnInit {
  mostrarJuego = true;
  jugadorActual: Usuario;
  jugado: number;
  valorAPasar: any;
  btnSalida=false;


  constructor(private service: SuscripcionService) {
    this.jugadorActual = new Usuario();
    this.jugadorActual.traeUsuario();

    //this.valorAPasar={nombre: this.jugadorActual.nombre, mail: this.jugadorActual.mail};
  }
  hacerSalidaPan(){
    this.btnSalida=true;
  }



  selectoPack(){
    this.service.accesoPack2();
  }

  iniciaJuego() {
    this.mostrarJuego = false;
  }

  mostrarMenu() {
    this.iniciaJuego;
  }

  ngOnInit(): void {}

  selectojuego(numero: number): void {
    let juego:string="";
    switch (numero) {
      case 1: {
        if(this.jugado = 1){
          juego= 'Tateti';
        }
        break;
      }
      case 2: {
        if (this.jugado = 2) {
          juego = 'Piedra Papel Tijera';
        }
        break;
      }
      case 3: {
        if (this.jugado = 3) {
          juego = 'Adivinador';
        }
        break;
      }
      case 4: {
        if (this.jugado = 4) {
          juego = 'mayormenor';
        }
        break;
      }
      case 5: {
        if (this.jugado = 5) {
          juego = 'ordenanumero';
        }
        break;
      }
      case 6: {
        if (this.jugado = 6) {
          juego = 'queemoji';
        }

          this.valorAPasar = {
          nombre: this.jugadorActual.nombre,
          mail: this.jugadorActual.email,
          juego: this.jugado,
        };
        break;
      }
    }
  }
}
