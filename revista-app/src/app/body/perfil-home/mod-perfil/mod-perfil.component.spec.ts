import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPerfilComponent } from './mod-perfil.component';

describe('ModPerfilComponent', () => {
  let component: ModPerfilComponent;
  let fixture: ComponentFixture<ModPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
