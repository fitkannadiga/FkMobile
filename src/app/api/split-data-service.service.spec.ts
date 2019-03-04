import { TestBed } from '@angular/core/testing';

import { SplitDataServiceService } from './split-data-service.service';

describe('SplitDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplitDataServiceService = TestBed.get(SplitDataServiceService);
    expect(service).toBeTruthy();
  });
});
