import { TestBed } from '@angular/core/testing';

import { NaoLogadoGuard } from './nao-logado.guard';

describe('NaoLogadoGuard', () => {
  let guard: NaoLogadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NaoLogadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
