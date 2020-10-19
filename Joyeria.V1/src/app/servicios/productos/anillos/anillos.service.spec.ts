import { TestBed } from '@angular/core/testing';

import { AnillosService } from './anillos.service';

describe('AnillosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnillosService = TestBed.get(AnillosService);
    expect(service).toBeTruthy();
  });
});
