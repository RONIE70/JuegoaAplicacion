import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth : AngularFireAuth) { }

   login(email:string, pass:string){
    return new Promise((resolve, rejected) => {
      this.angularFireAuth.signInWithEmailAndPassword(email, pass).then(userData => {
        resolve(userData);
      }, (error: any) => {
        console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            rejected("El usuario no existe");
            break;
          case "auth/invalid-email":
            rejected("email invalido");
            break;
          case "auth/wrong-password":
            rejected("contraseña incorrecta");
            break;
          default:
            rejected("ERROR");
            break;
        }
      });

    });

  }
/**revisar */
registerUser(email:string, pass:string){
  return new Promise((resolve,rejected)=>{
    this.angularFireAuth.createUserWithEmailAndPassword(email,pass)
    .then(userData => resolve(userData),
    (error:any)=>{
      console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            rejected("El usuario no existe");
            break;
          case "auth/invalid-email":
            rejected("email invalido");
            break;
          case "auth/email-already-in-use":
            rejected("el email ya fue registrado");
            break;
            case "auth/email-already-exists":
            rejected("el email ya fue registrado");
            break;
            case "auth/weak-password":
            rejected("la contraseña debe contener 6 caracteres como minimo");
            break;
          default:
            rejected("ERROR");
            break;
        }
    });




  });
}


getUserLogged(){
  return this.angularFireAuth.authState;
}
logOut(){
  this.angularFireAuth.signOut();
}

}
