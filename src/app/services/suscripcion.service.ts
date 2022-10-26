import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  usuarioActual: Usuario;
  accesoBronce:boolean;
  accesoPLata:boolean;
  accesoOro:boolean;

  constructor() {
    this.accesoBronce=false;
    this.accesoPLata=false;
    this.accesoOro=false;
  }

  guardaSuscripcion(tipo: any) {
    var suscripcionNueva = [];
    let pack: any;
    let juego1: any;
    let juego2: any;
    let juego3: any;
    let juego4: any;
    let juego5: any;
    let juego6: any;
    let juego7: any;
    this.usuarioActual = new Usuario();
    this.usuarioActual.traeUsuario();
    let mail = this.usuarioActual.email;


    switch (tipo) {
      case 1:
        juego5 = 1;
        pack = 1;
        break;
      case 2:
        juego1 = 1;
        juego3 = 1;
        pack = 2;
        break;
      case 3:
        juego2 = 1;
        juego4 = 1;
        juego6 = 1;
        juego7 = 1;
        pack = 3;
    }

    suscripcionNueva.push({
      mail: mail,
      pack: pack,
      tateti:juego1,
      ppt: juego2,
      adivina: juego3,
      ahorcado: juego4,
      mayorMenor: juego5,
      queemoji: juego6,
      ordenaNum: juego7,
    });

    if (localStorage.getItem('suscripciones') == null) {
      suscripcionNueva = [];
    } else {
      suscripcionNueva = JSON.parse(localStorage.getItem('suscripciones'));

    }

    suscripcionNueva.push({
      mail: mail,
      pack: pack,
      tateti: juego1,
      ppt: juego2,
      adivina: juego3,
      ahorcado: juego4,
      mayorMenor: juego5,
      queemoji: juego6,
      ordenaNum: juego7,
    });
    localStorage.setItem('suscripciones', JSON.stringify(suscripcionNueva));
  }

  get(lista: string) {
    try{
      return JSON.parse(localStorage.getItem(lista));
    } catch(e){
      console.log(e);
    }

  }

  accesoPack1(){
    this.accesoBronce = true;
  }

  accesoPack2(){
    this.accesoPLata=true;
  }

  accesoPack3(){
    this.accesoOro=true;
  }

}
