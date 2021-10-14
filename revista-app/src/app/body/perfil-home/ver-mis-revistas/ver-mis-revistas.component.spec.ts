import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisRevistasComponent } from './ver-mis-revistas.component';

describe('VerMisRevistasComponent', () => {
  let component: VerMisRevistasComponent;
  let fixture: ComponentFixture<VerMisRevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMisRevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMisRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
