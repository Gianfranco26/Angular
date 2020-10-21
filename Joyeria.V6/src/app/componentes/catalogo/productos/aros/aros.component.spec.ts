import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArosComponent } from './aros.component';

describe('ArosComponent', () => {
  let component: ArosComponent;
  let fixture: ComponentFixture<ArosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
