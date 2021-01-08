import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Getquote2Component } from './getquote2.component';

describe('Getquote2Component', () => {
  let component: Getquote2Component;
  let fixture: ComponentFixture<Getquote2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Getquote2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Getquote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
