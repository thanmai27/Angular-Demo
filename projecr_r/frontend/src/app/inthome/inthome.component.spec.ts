import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InthomeComponent } from './inthome.component';

describe('InthomeComponent', () => {
  let component: InthomeComponent;
  let fixture: ComponentFixture<InthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
