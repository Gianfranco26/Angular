import { TestBed } from '@angular/core/testing';

import { ArosService } from './aros.service';

describe('ArosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArosService = TestBed.get(ArosService);
    expect(service).toBeTruthy();
  });
});
