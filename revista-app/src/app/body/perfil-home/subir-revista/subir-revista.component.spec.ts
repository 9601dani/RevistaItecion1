import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirRevistaComponent } from './subir-revista.component';

describe('SubirRevistaComponent', () => {
  let component: SubirRevistaComponent;
  let fixture: ComponentFixture<SubirRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
