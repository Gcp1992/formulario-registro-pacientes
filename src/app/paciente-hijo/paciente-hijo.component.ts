import { Component, Input } from '@angular/core';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'app-paciente-hijo',
  templateUrl: './paciente-hijo.component.html',
  styleUrls: ['./paciente-hijo.component.css']
})
/*Debemos indicar que la clase hijo se prepare para recibir 2 datos con los identificadores
 creados en el padre usando la directiva @input*/
export class PacienteHijoComponent {
  //Especificamos que es de tipo Paciente, da error porque no iniciamos la variable
  //Debemos indicar a nuestro proyecto que pase de una sintaxis estricta a no estricta
  //@Input pasa información del componente padre al hijo
  @Input() pacienteLista:Paciente;
  @Input() indice:number;
}
