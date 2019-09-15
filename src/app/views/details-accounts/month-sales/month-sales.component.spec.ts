import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSalesComponent } from './month-sales.component';

describe('MonthSalesComponent', () => {
  let component: MonthSalesComponent;
  let fixture: ComponentFixture<MonthSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
