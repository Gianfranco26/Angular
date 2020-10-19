import { TestBed } from '@angular/core/testing';

import { CollaresService } from './collares.service';

describe('CollaresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollaresService = TestBed.get(CollaresService);
    expect(service).toBeTruthy();
  });
});
