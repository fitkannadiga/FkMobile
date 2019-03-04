import { TestBed } from '@angular/core/testing';

import { RecipeDetailServiceService } from './recipe-detail-service.service';

describe('RecipeDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeDetailServiceService = TestBed.get(RecipeDetailServiceService);
    expect(service).toBeTruthy();
  });
});
