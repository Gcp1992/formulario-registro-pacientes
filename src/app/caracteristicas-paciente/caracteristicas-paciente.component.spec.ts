import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasPacienteComponent } from './caracteristicas-paciente.component';

describe('CaracteristicasPacienteComponent', () => {
  let component: CaracteristicasPacienteComponent;
  let fixture: ComponentFixture<CaracteristicasPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
