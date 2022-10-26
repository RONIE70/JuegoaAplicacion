import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class CreativaLoginService {

  user:Usuario = new Usuario();
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  traerDatosUsuario(email) {
    let body: any;
    body = JSON.stringify({email:email});
    const url2 = this.url + 'usuarios/traerLogueado';
    return this.http.post(url2,body);
  }

  guardarSesion(email){
    let body: any;
    body = JSON.stringify({ email: email });
    const url2 = this.url + 'usuarios/guardarSesion';
    return this.http.post(url2, body);
  }

  getUser(){
    return this.user;
  }

}
