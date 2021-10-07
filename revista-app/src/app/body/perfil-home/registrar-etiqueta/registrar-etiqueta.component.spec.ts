import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEtiquetaComponent } from './registrar-etiqueta.component';

describe('RegistrarEtiquetaComponent', () => {
  let component: RegistrarEtiquetaComponent;
  let fixture: ComponentFixture<RegistrarEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
