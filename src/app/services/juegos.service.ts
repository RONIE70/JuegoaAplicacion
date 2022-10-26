import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor() {}

  guardaPartida(intentos:number,mail:string,juego:string){
    let scores: { intentos: number; mail: string; juego: string; }[]
    if (localStorage.getItem('highScore') == null) {
       scores = [];
     } else {
       scores = JSON.parse(localStorage.getItem('highScore'));
    }
    scores.push({
      intentos: intentos,
      mail:mail,
      juego:juego,
    });

    localStorage.setItem('highScore', JSON.stringify(scores));

  }

}
