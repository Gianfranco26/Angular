import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccesoriesComponent } from './admin-accesories.component';

describe('AdminAccesoriesComponent', () => {
  let component: AdminAccesoriesComponent;
  let fixture: ComponentFixture<AdminAccesoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccesoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
