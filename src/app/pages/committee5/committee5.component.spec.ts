import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Committee5Component } from './committee5.component';

describe('Committee5Component', () => {
  let component: Committee5Component;
  let fixture: ComponentFixture<Committee5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Committee5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Committee5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
