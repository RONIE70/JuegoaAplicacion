import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private firestore : AngularFirestore) { }

  login(user: any){

    return new Promise((resolve, rejected) =>{
      this.firestore.collection('logs').add(user)
      .then(t =>{
        resolve(user);//aca devuelvo el objeto usuario
        console.log(user.name);
      },(error :any) =>{
        rejected(error);
        console.log(user);
      });


    })
  }
}
