import { TestBed } from '@angular/core/testing';

import { NutrientGraphService } from './nutrient-graph.service';

describe('NutrientGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutrientGraphService = TestBed.get(NutrientGraphService);
    expect(service).toBeTruthy();
  });
});
