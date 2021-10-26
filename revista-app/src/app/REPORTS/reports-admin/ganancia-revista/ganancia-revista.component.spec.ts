import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciaRevistaComponent } from './ganancia-revista.component';

describe('GananciaRevistaComponent', () => {
  let component: GananciaRevistaComponent;
  let fixture: ComponentFixture<GananciaRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciaRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GananciaRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
