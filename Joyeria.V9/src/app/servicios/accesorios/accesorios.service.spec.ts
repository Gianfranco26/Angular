import { TestBed } from '@angular/core/testing';

import { AccesoriosService } from './accesorios.service';

describe('AccesoriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesoriosService = TestBed.get(AccesoriosService);
    expect(service).toBeTruthy();
  });
});
