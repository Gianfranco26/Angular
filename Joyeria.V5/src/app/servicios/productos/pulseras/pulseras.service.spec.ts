import { TestBed } from '@angular/core/testing';

import { PulserasService } from './pulseras.service';

describe('PulserasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PulserasService = TestBed.get(PulserasService);
    expect(service).toBeTruthy();
  });
});
