import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientGraphPage } from './nutrient-graph.page';

describe('NutrientGraphPage', () => {
  let component: NutrientGraphPage;
  let fixture: ComponentFixture<NutrientGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientGraphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
