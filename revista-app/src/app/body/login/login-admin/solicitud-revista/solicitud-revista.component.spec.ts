import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRevistaComponent } from './solicitud-revista.component';

describe('SolicitudRevistaComponent', () => {
  let component: SolicitudRevistaComponent;
  let fixture: ComponentFixture<SolicitudRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
