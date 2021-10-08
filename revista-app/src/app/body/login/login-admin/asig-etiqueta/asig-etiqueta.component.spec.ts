import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigEtiquetaComponent } from './asig-etiqueta.component';

describe('AsigEtiquetaComponent', () => {
  let component: AsigEtiquetaComponent;
  let fixture: ComponentFixture<AsigEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsigEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
