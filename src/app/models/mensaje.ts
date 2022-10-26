
 export class Mensaje {
  fecha:Date;
  usuario:string;
  texto:string;


  public constructor() {

      this.fecha = new Date();
      this.texto ="";
      this.usuario="no seteado";

  }



}
