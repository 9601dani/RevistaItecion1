import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporAnunciosComponent } from './repor-anuncios.component';

describe('ReporAnunciosComponent', () => {
  let component: ReporAnunciosComponent;
  let fixture: ComponentFixture<ReporAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
