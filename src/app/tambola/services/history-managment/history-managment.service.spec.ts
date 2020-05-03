import { TestBed } from '@angular/core/testing';

import { HistoryManagmentService } from './history-managment.service';

describe('HistoryManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryManagmentService = TestBed.get(HistoryManagmentService);
    expect(service).toBeTruthy();
  });
});
