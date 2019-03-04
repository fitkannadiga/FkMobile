import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalTimerPage } from './interval-timer.page';

describe('IntervalTimerPage', () => {
  let component: IntervalTimerPage;
  let fixture: ComponentFixture<IntervalTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalTimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
