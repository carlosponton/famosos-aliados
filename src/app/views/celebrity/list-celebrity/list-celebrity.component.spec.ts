import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCelebrityComponent } from './list-celebrity.component';

describe('ListCelebrityComponent', () => {
  let component: ListCelebrityComponent;
  let fixture: ComponentFixture<ListCelebrityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCelebrityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCelebrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
