import { TestBed } from '@angular/core/testing';

import { MuscleGroupServiceService } from './muscle-group-service.service';

describe('MuscleGroupServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuscleGroupServiceService = TestBed.get(MuscleGroupServiceService);
    expect(service).toBeTruthy();
  });
});
