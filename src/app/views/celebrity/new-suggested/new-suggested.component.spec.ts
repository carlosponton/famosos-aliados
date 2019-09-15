import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuggestedComponent } from './new-suggested.component';

describe('NewSuggestedComponent', () => {
  let component: NewSuggestedComponent;
  let fixture: ComponentFixture<NewSuggestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSuggestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
