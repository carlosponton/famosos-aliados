import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSalesComponent } from './week-sales.component';

describe('WeekSalesComponent', () => {
  let component: WeekSalesComponent;
  let fixture: ComponentFixture<WeekSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
