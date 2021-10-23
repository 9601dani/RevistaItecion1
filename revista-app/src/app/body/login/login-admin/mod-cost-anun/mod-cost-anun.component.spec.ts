import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCostAnunComponent } from './mod-cost-anun.component';

describe('ModCostAnunComponent', () => {
  let component: ModCostAnunComponent;
  let fixture: ComponentFixture<ModCostAnunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCostAnunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCostAnunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
