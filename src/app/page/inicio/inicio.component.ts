import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreativaLoginService } from './../../services/creativaLogin.service';
import { Usuario } from '../../models/usuario.model';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  usuarioActual: Usuario;
  identificadorUsuario: string;

  constructor(private crealog: CreativaLoginService, private router: Router) {

    this.identificadorUsuario = localStorage.getItem('email');


    //console.log(JSON.stringify(this.usuarioActual));

    this.crealog
      .traerDatosUsuario(this.identificadorUsuario)
      .subscribe((response: Usuario) => {

        //console.log(JSON.stringify(this.usuarioActual));
        this.usuarioActual = response[0];
        //localStorage.setItem('usuarioActual',JSON.stringify(response[0]));
        //alert(JSON.stringify(response));
        //console.log(JSON.stringify(this.usuarioActual));
      });
    //this.usuarioActual = this.crealog.getUser();
    //this.gitSR.getName();
  }

  ngOnInit(): void { }

  // traeUsuario(): void {
  //   if (localStorage.getItem('usuarioActual') != null) {
  //     var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
  //     if (localStorage.getItem('users') != null) {
  //       var users = JSON.parse(localStorage.getItem('users'));
  //     }
  //   } else {
  //     window.alert('else del if');
  //   }
  //   let encontrado = 0;
  //   for (let i in users) {
  //     if (usuarioActual[0]['mail'] == users[i]['mail']) {
  //       this.usuarioActual.nombre = users[i]['nombre'];
  //       this.usuarioActual.mail = users[i]['mail'];
  //       break;
  //     }
  //   }
  // }

  // getName(){
  //   this.gitSR.getName().subscribe((data) =>{
  //     console.log(data);
  //     })
  // }
}
