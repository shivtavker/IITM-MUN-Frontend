import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Committee3Component } from './committee3.component';

describe('Committee3Component', () => {
  let component: Committee3Component;
  let fixture: ComponentFixture<Committee3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Committee3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Committee3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
