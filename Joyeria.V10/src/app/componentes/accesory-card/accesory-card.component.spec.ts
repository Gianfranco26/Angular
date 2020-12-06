import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoryCardComponent } from './accesory-card.component';

describe('AccesoryCardComponent', () => {
  let component: AccesoryCardComponent;
  let fixture: ComponentFixture<AccesoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
