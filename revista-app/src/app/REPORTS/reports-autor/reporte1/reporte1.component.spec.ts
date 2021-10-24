import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REPORTE1Component } from './reporte1.component';

describe('REPORTE1Component', () => {
  let component: REPORTE1Component;
  let fixture: ComponentFixture<REPORTE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ REPORTE1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(REPORTE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
