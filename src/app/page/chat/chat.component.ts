import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../../models/mensaje';
import { StorageChatService } from 'src/app/services/storage-chat.service';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs';
import { CreativaLoginService } from './../../services/creativaLogin.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
mostrarChat=false;
usuarioActual:Usuario;
email:string;

public textoMensaje: string = "";
public coleccion: Array<Mensaje> = new Array<Mensaje>();
mensaje:any=[];
public colleccionAsync:Observable<Array<Mensaje>>;


  constructor(private router:Router,public firestoreApp: StorageChatService,
    private creaLogin:CreativaLoginService) {
    firestoreApp.traerColeccion().subscribe(t => {
      this.coleccion = [];
      (<Array<Mensaje>>t).forEach(element =>
        this.coleccion.push(element)
      )

    });
    this.colleccionAsync = this.firestoreApp.traerColeccion();
    this.usuarioActual = new Usuario();
    this.email =localStorage.getItem('email');

  }

  ngOnInit(): void {

  }


  /*enviarMensaje(){
    //console.log(this.nuevoMensaje);
    if(this.nuevoMensaje=="") return;
    let mensaje = {
      emisor:this.usuarioActual,
      texto:this.nuevoMensaje
    }
    this.mensajes.push(mensaje);
    this.nuevoMensaje="";
  }*/

  Agregar() {
    let mensajeAPasar: Mensaje = new Mensaje();
    mensajeAPasar.texto = this.textoMensaje;
    mensajeAPasar.usuario = this.email;

    this.firestoreApp.setItem(mensajeAPasar);

  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo:any = elements[(elements.length-1)];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('contenedorDeMensajes').scrollTop = toppos;
  }
}
