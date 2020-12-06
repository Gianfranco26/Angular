import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoryFormComponent } from './accesory-form.component';

describe('AccesoryFormComponent', () => {
  let component: AccesoryFormComponent;
  let fixture: ComponentFixture<AccesoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
