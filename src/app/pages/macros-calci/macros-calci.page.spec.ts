import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosCalciPage } from './macros-calci.page';

describe('MacrosCalciPage', () => {
  let component: MacrosCalciPage;
  let fixture: ComponentFixture<MacrosCalciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacrosCalciPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrosCalciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
