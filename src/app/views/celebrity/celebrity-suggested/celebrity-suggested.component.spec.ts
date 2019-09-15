import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritySuggestedComponent } from './celebrity-suggested.component';

describe('CelebritySuggestedComponent', () => {
  let component: CelebritySuggestedComponent;
  let fixture: ComponentFixture<CelebritySuggestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebritySuggestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritySuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
