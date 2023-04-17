export class Paciente{
  nombre:string="";
  apellidos:string="";
  dni:string="";
  telefono:string="";
  direccion:string="";
  email:string="";

  constructor(nombre:string,apellidos:string,dni:string,telefono:string,direccion:string,email:string){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.dni=dni;
    this.telefono=telefono;
    this.direccion=direccion;
  }


}
