import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  jugadorActual: Usuario;
  listaSuscripciones = [];
  buscarPack: boolean;
  buscarTipo:any;
  usuarioActual = new Usuario();
  btnSalida2=false;

  constructor(private miServicio: SuscripcionService, private router: Router) {
    this.usuarioActual = new Usuario();
    this.usuarioActual.traeUsuario();
    this.jugadorActual = new Usuario();
    this.jugadorActual.traeUsuario();
    this.buscarPack = false;
    this.listaSuscripciones = this.miServicio.get('suscripciones');
  }

  ngOnInit(): void {}

  hacerSalidaSus(){
    this.btnSalida2=true;
  }

  tateti(): void {
    this.miServicio.accesoPack2();
    this.router.navigate(['tateti']);
  }

  ppt(): void {
    this.miServicio.accesoPack3();
    this.router.navigate(['ppt']);
  }

  queemoji(): void {
    this.miServicio.accesoPack3();
    this.router.navigate(['queemoji']);
  }

  ordenaNum(): void {
    this.miServicio.accesoPack3();
    this.router.navigate(['ordenanumero']);
  }

  adivina(): void {
    this.miServicio.accesoPack2();
    this.router.navigate(['adivinador']);
  }

  ahorcado(): void {
    this.miServicio.accesoPack3();
    this.router.navigate(['ahorcado']);
  }

  mayMenor(): void {
    this.miServicio.accesoPack1();
    this.router.navigate(['mayormenor']);
  }

  buscaPack(tipo: any) {
    this.buscarPack = true;
    this.buscarTipo = tipo;
     /*if(tipo==1){
      this.buscarTipo = 'Bronce';
    }else if(tipo==2){
      this.buscarTipo = 'Plata';
    }else{
      this.buscarTipo = 'Oro';
    }*/
  }

  buscaUsuario() {
    this.buscarPack = false;
  }
}
