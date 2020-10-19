import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaresComponent } from './collares.component';

describe('CollaresComponent', () => {
  let component: CollaresComponent;
  let fixture: ComponentFixture<CollaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
