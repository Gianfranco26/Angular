import { TestBed } from '@angular/core/testing';

import { CategoriaaccesoriosService } from './categoriaaccesorios.service';

describe('CategoriaaccesoriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaaccesoriosService = TestBed.get(CategoriaaccesoriosService);
    expect(service).toBeTruthy();
  });
});
