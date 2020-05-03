import { TestBed } from '@angular/core/testing';

import { TambolaService } from './tambola.service';

describe('TambolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TambolaService = TestBed.get(TambolaService);
    expect(service).toBeTruthy();
  });
});
