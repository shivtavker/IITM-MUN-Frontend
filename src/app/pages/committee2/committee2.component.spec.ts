import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Committee2Component } from './committee2.component';

describe('Committee2Component', () => {
  let component: Committee2Component;
  let fixture: ComponentFixture<Committee2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Committee2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Committee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
