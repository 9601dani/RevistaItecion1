import { TestBed } from '@angular/core/testing';

import { ObtenerInfoUserService } from './obtener-info-user.service';

describe('ObtenerInfoUserService', () => {
  let service: ObtenerInfoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerInfoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
