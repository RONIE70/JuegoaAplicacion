import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectAngular';
  mostrarLog = false;


  constructor(private router: Router) {}

  ngOnInit(){
   AOS.init();
   window.addEventListener('load', AOS.refresh);
  }

  mostrarLogOut() {
    this.mostrarLog = true;
  }

  logOut(){
    localStorage.removeItem('usuarioActual');
    this.router.navigate(['login']);
  }



}



