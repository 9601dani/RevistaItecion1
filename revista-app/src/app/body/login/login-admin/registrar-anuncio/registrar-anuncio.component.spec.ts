import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAnuncioComponent } from './registrar-anuncio.component';

describe('RegistrarAnuncioComponent', () => {
  let component: RegistrarAnuncioComponent;
  let fixture: ComponentFixture<RegistrarAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
