import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGamePage } from './end-game.page';

describe('EndGamePage', () => {
  let component: EndGamePage;
  let fixture: ComponentFixture<EndGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
