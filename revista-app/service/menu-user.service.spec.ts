import { TestBed } from '@angular/core/testing';

import { MenuUserService } from './menu-user.service';

describe('MenuUserService', () => {
  let service: MenuUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
