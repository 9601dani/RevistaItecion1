import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRevistaComponent } from './buscar-revista.component';

describe('BuscarRevistaComponent', () => {
  let component: BuscarRevistaComponent;
  let fixture: ComponentFixture<BuscarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
