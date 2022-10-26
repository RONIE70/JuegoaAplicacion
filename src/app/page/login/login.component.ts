import { Component, OnInit } from '@angular/core';
import { Auth, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log.service';
import { Usuario } from '../../models/usuario.model';
import { CreativaLoginService } from './../../services/creativaLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //public collection;
  miUsuario: Usuario;
  user = {
    email: '',
    pass: '',
  };
  userLog = {
    name: '',
    date: '',
  };
  error = {
    message: '',
  };

  messageError = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    public logService: LogService,
    private creaLogin: CreativaLoginService //public miservicio:StorageChatService
  ) {
    //this.miUsuario['mail'] = this.user.email;
    //this.miservicio.traerColeccion().then(e=>this.collection);
  }

  ngOnInit(): void {}

  onSetDefault() {
    this.user.email = 'pepe@gmail.com';
    this.user.pass = '123456';
  }

  login() {
    let date = new Date();

    this.userLog.date = date.toLocaleString(); //date.toLocaleString('es-ES',{dateStyle:'full'});
    this.userLog.name = this.user.email;

    this.authService
      .login(this.user.email, this.user.pass)
      .then((res) => {
        this.logService
          .login(this.userLog)
          .then((res:any) => {
            //alert(JSON.stringify(res));
            localStorage.setItem('email',res.name);
            //tcreaLogin.guardarSesion(this.user.email).subscribe((response:any)=>{
             // alert(response);
              this.router.navigate(['../inicio']);
            //});
          })
          .catch((error) => {
            console.log(error);
          });

      })
      .catch((error) => (this.messageError = error));
  }
}
