
export class Usuario {

  id_usuario?: number;
  email: string ;
  password: string ;
  nombre: string ;
  apellido: string ;
  tipo_suscripcion: TipoSuscripcion;


  constructor() {

  }

  registrar(): void {
    // var users = [];
    if (localStorage.getItem('users') == null) {
    var users = [];
  } else {
     users = JSON.parse(localStorage.getItem('users'));
      //users.push(this)
    }
    users.push({
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    });

    localStorage.setItem('users', JSON.stringify(users));
  }

  guardaJugador(): void {
    var usuarioActual = [];
    usuarioActual.push({
      nombre: this.nombre,
      email: this.email,
    });
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
  }

  verificaJugador(): boolean {
    var valor: boolean;
    //var jugadorActual=[];
    valor = false;
    //jugadorActual = JSON.parse(localStorage.getItem('jugadorActual'));
    if (localStorage.getItem('jugadorActual') != null) {
      valor = true;
    }

    return valor;
  }

  logoutUsuario() {
    localStorage.removeItem('usuarioActual');
  }

  traeUsuario(): void {
    if (localStorage.getItem('usuarioActual') != null) {
        var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
      if (localStorage.getItem('users') != null) {
        var users = JSON.parse(localStorage.getItem('users'));
      }
    } else {
      //window.alert('else del if');
    }
    //let encontrado = 0;
    for (let i in users) {
      if (usuarioActual[0]['email'] == users[i]['email']) {
        this.nombre = users[i]['nombre'];
        this.email = users[i]['email'];
        break;
      }
    }
  }
}

type TipoSuscripcion = 'gratis' | 'bronce' | 'plata' | 'oro';




