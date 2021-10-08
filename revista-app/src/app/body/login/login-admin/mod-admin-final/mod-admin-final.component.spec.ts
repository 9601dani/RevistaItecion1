import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdminFinalComponent } from './mod-admin-final.component';

describe('ModAdminFinalComponent', () => {
  let component: ModAdminFinalComponent;
  let fixture: ComponentFixture<ModAdminFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAdminFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAdminFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
