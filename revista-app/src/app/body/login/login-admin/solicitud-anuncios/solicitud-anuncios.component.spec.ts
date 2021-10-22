import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAnunciosComponent } from './solicitud-anuncios.component';

describe('SolicitudAnunciosComponent', () => {
  let component: SolicitudAnunciosComponent;
  let fixture: ComponentFixture<SolicitudAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
