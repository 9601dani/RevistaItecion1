import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAnuncioComponent } from './n-anuncio.component';

describe('NAnuncioComponent', () => {
  let component: NAnuncioComponent;
  let fixture: ComponentFixture<NAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
