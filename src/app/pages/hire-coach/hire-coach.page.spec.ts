import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireCoachPage } from './hire-coach.page';

describe('HireCoachPage', () => {
  let component: HireCoachPage;
  let fixture: ComponentFixture<HireCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireCoachPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
