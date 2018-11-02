import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Committee4Component } from './committee4.component';

describe('Committee4Component', () => {
  let component: Committee4Component;
  let fixture: ComponentFixture<Committee4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Committee4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Committee4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
