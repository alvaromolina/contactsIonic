import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatusPage } from './add-status.page';

describe('AddStatusPage', () => {
  let component: AddStatusPage;
  let fixture: ComponentFixture<AddStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
