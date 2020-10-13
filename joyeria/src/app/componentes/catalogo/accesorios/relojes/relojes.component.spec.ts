import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojesComponent } from './relojes.component';

describe('RelojesComponent', () => {
  let component: RelojesComponent;
  let fixture: ComponentFixture<RelojesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelojesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelojesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
