import { TestBed } from '@angular/core/testing';

import { NewUsuarioService } from './new-usuario.service';

describe('NewUsuarioService', () => {
  let service: NewUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
