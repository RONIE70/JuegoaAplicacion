import { getLocaleDateFormat } from "@angular/common";

export class Jugador {
  nombre: string;
  mail: string;
  fecha: any;
  puntaje: any;
  juego: any;
  listaJugadores: any;
  contador: number;
  nombreJuego: string;

  constructor() {
    this.fecha = getLocaleDateFormat;

  }

  setNombre(nombre: any) {
    this.nombre = nombre;
  }
  setMail(mail: any) {
    this.mail = mail;
  }
  setNombrejuego(juego: string){
    this.nombreJuego = juego;
  }

  guardaScore(): void {
    window.alert('aca entro');
    var scoreJugador = [];
    if (localStorage.getItem('scoreJugador') == null) {
      window.alert('verdadero'); //si queres saca la alerta despues de probar como funciona
      scoreJugador = [];
    } else {
      window.alert('sino');
      scoreJugador = JSON.parse(localStorage.getItem('scoreJugador'));
    }
    scoreJugador.push({
      nombre: this.nombre,
      mail: this.mail,
      juego: this.juego,
      puntaje: this.puntaje,
      fecha: this.fecha,
      intentos: this.contador
    });
    //scoreJugador.push({ puntaje: this.puntaje, fecha: this.fechaHora});

    localStorage.setItem('scoreJugador', JSON.stringify(scoreJugador));
  }

  asignaScore(): number {
    if (typeof localStorage.getItem('contadores') != null) {
      let contador = JSON.parse(localStorage.getItem('contadores'));
      if (this.puntaje <= 5 && this.puntaje !== 1) {
        this.puntaje = 100;
      }
      if (this.contador > 5 && this.contador !== 1) {
        this.puntaje = 50;
      }
      if (this.contador == 1) {
        this.puntaje = 500;
      }
    }
    return this.puntaje;
  }

  traeScores(): void {
    if (localStorage.getItem('scoreJugador') != null) {
      this.listaJugadores = JSON.parse(localStorage.getItem('scoreJugador'));
      console.log(JSON.parse(this.listaJugadores));
    }
  }
  guardaJugador(): void {
    let jugador = [];
    jugador.push({
      nombre: this.nombre,
      mail: this.mail,
    });
    jugador.push({
      fecha: this.fecha,
      puntaje: this.puntaje,
      intentos: this.contador,
    });
    localStorage.setItem('jugador', JSON.stringify(jugador));
  }
}

//let jugador = new Jugador();

