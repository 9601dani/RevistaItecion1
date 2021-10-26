import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMasSusComponent } from './report-mas-sus.component';

describe('ReportMasSusComponent', () => {
  let component: ReportMasSusComponent;
  let fixture: ComponentFixture<ReportMasSusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMasSusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMasSusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
