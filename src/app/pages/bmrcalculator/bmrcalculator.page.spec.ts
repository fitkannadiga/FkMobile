import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMRcalculatorPage } from './bmrcalculator.page';

describe('BMRcalculatorPage', () => {
  let component: BMRcalculatorPage;
  let fixture: ComponentFixture<BMRcalculatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMRcalculatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMRcalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
