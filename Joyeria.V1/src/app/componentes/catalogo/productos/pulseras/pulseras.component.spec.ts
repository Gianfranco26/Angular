import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulserasComponent } from './pulseras.component';

describe('PulserasComponent', () => {
  let component: PulserasComponent;
  let fixture: ComponentFixture<PulserasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulserasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulserasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
