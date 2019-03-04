import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWorkoutListPage } from './individual-workout-list.page';

describe('IndividualWorkoutListPage', () => {
  let component: IndividualWorkoutListPage;
  let fixture: ComponentFixture<IndividualWorkoutListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualWorkoutListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualWorkoutListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
