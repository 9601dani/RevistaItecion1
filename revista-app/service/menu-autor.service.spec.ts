import { TestBed } from '@angular/core/testing';

import { MenuAutorService } from './menu-autor.service';

describe('MenuAutorService', () => {
  let service: MenuAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
