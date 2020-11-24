import { TestBed } from '@angular/core/testing';

import { CategoriaproductosService } from './categoriaproductos.service';

describe('CategoriaproductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaproductosService = TestBed.get(CategoriaproductosService);
    expect(service).toBeTruthy();
  });
});
