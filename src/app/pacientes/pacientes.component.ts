import { Component } from '@angular/core';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})

export class PacientesComponent {
  pacientes:Paciente[]=[
    new Paciente("Gonzalo", "Cruz" , "7573827V", "674896732", "Calle Huertas", "gonzalito@gmail.com"),
    new Paciente("Juan", "Pérez" , "56743677V", "674896789", "Calle Augusta", "juan@gmail.com")
  ];

  nombre:string="";
  apellidos:string="";
  dni:string="";
  telefono:string="";
  direccion:string="";
  email:string="";

  agregarPaciente(){
    let pac=new Paciente(this.nombre,this.apellidos,this.dni,this.telefono,this.direccion,this.email);
    this.pacientes.push(pac);
  }

  //Array vacío
  caracteristicas = [''];

  //Nos pegamos aquí la instrucción de angular en el componente padre super
  agregarCaracteristica(nuevaCaracteristica: string) {
    //Hacemos un push de nuevaCaracteristica al array caracteristicas
    this.caracteristicas.push(nuevaCaracteristica);
  }

}
