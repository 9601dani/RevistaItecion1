import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasComentReportComponent } from './mas-coment-report.component';

describe('MasComentReportComponent', () => {
  let component: MasComentReportComponent;
  let fixture: ComponentFixture<MasComentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasComentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasComentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
