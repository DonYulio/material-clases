import { TestBed } from '@angular/core/testing';

import { ArchivosService } from './archivos.service';

describe('ArchivosService', () => {
  let service: ArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
