import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';
import { PacienteHijoComponent } from './paciente-hijo/paciente-hijo.component';
import { CaracteristicasPacienteComponent } from './caracteristicas-paciente/caracteristicas-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    PacienteHijoComponent,
    CaracteristicasPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
