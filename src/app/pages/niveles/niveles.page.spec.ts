import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesPage } from './niveles.page';

describe('NivelesPage', () => {
  let component: NivelesPage;
  let fixture: ComponentFixture<NivelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
