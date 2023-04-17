import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHijoComponent } from './paciente-hijo.component';

describe('PacienteHijoComponent', () => {
  let component: PacienteHijoComponent;
  let fixture: ComponentFixture<PacienteHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
