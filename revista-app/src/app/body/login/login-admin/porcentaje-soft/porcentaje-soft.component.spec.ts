import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeSoftComponent } from './porcentaje-soft.component';

describe('PorcentajeSoftComponent', () => {
  let component: PorcentajeSoftComponent;
  let fixture: ComponentFixture<PorcentajeSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
