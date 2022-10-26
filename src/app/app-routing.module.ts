import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { PantallaJuegosComponent } from './page/pantallaJuegos/pantallaJuegos.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EstadisticasComponent } from './page/estadisticas/estadisticas.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionAltaComponent } from './page/suscripcionAlta/suscripcionAlta.component';
import { ChatComponent } from './page/chat/chat.component';

const routes: Routes = [
  { path: 'suscripcion', component: SuscripcionComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'chat', component: ChatComponent },

  {
    path: 'juegos',
    component: PantallaJuegosComponent,
  },

  { path: 'suscripcion', component: SuscripcionComponent },
  { path: 'suscripcionAlta', component: SuscripcionAltaComponent },

  { path: 'FormGroup', component: FormGroup },
  { path: 'FormBuilder', component: FormBuilder },
  { path: '', component: BienvenidoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
