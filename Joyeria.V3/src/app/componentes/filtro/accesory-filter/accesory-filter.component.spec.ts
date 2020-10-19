import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoryFilterComponent } from './accesory-filter.component';

describe('AccesoryFilterComponent', () => {
  let component: AccesoryFilterComponent;
  let fixture: ComponentFixture<AccesoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
