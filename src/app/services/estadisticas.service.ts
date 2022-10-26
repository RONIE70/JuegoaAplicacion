import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Puntaje } from '../models/puntaje.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  user:Usuario = new Usuario();
  puntajeActual:Puntaje = new Puntaje();
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  traerPuntosUsuario(email) {
    let body: any;
    body = JSON.stringify({email:email});
    const url2 = this.url + 'puntaje/BuscarPuntuajeUsuario';
    return this.http.post(url2,body);
  }
}
