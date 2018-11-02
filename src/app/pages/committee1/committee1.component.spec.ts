import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Committee1Component } from './committee1.component';

describe('Committee1Component', () => {
  let component: Committee1Component;
  let fixture: ComponentFixture<Committee1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Committee1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Committee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
