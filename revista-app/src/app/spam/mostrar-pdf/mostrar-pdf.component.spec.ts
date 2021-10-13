import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPdfComponent } from './mostrar-pdf.component';

describe('MostrarPdfComponent', () => {
  let component: MostrarPdfComponent;
  let fixture: ComponentFixture<MostrarPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
