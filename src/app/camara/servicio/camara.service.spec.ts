import { TestBed } from '@angular/core/testing';

import { CamaraService } from './camara.service';

describe('CamaraService', () => {
  let service: CamaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
