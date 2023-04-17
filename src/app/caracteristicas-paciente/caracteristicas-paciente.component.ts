import { Component} from '@angular/core';
//2ºImportamos esto:
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-paciente',
  templateUrl: './caracteristicas-paciente.component.html',
  styleUrls: ['./caracteristicas-paciente.component.css']
})
export class CaracteristicasPacienteComponent {
  //1ºPara pasar información de un elemento hijo a su padre
  @Output() caracteristicasPacientes = new EventEmitter<string>();

  /*3ºNos traemos la instrucción de la página de angular y la modificamos a nuestra necesidad.
  Esta función es la que se encarga de traspasar la información del hijo al padre*/
  agregaCaracteristicas(value: string) {
    this.caracteristicasPacientes.emit(value);
  }
}
