import { TestBed } from '@angular/core/testing';

import { InternetStatusService } from './internet-status.service';

describe('InternetStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternetStatusService = TestBed.get(InternetStatusService);
    expect(service).toBeTruthy();
  });
});
