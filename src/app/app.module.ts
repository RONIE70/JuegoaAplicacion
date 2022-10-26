import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { RegistroComponent } from './page/registro/registro.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { PantallaJuegosComponent } from './page/pantallaJuegos/pantallaJuegos.component';
import { EstadisticasComponent } from './page/estadisticas/estadisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionAltaComponent } from './page/suscripcionAlta/suscripcionAlta.component';
import { ChatComponent } from './page/chat/chat.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UsuarioDirective } from './directivas/usuario.directive';
import { MensajesPipe } from './pipes/mensajes.pipe';
import { CommonModule } from '@angular/common';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    RegistroComponent,
    InicioComponent,
    PantallaJuegosComponent,
    EstadisticasComponent,
    SuscripcionComponent,
    SuscripcionAltaComponent,
    ChatComponent,
    UsuarioDirective,
    MensajesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideAuth(() => getAuth()),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
