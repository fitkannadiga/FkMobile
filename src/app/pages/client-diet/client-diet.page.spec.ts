import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDietPage } from './client-diet.page';

describe('ClientDietPage', () => {
  let component: ClientDietPage;
  let fixture: ComponentFixture<ClientDietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDietPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
