import { TestBed } from '@angular/core/testing';

import { RelojesService } from './relojes.service';

describe('RelojesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelojesService = TestBed.get(RelojesService);
    expect(service).toBeTruthy();
  });
});
