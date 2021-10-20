import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigCategoriaComponent } from './asig-categoria.component';

describe('AsigCategoriaComponent', () => {
  let component: AsigCategoriaComponent;
  let fixture: ComponentFixture<AsigCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsigCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
