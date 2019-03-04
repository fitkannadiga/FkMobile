import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitBookPage } from './fit-book.page';

describe('FitBookPage', () => {
  let component: FitBookPage;
  let fixture: ComponentFixture<FitBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
