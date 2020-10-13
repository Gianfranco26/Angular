import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnillosComponent } from './anillos.component';

describe('AnillosComponent', () => {
  let component: AnillosComponent;
  let fixture: ComponentFixture<AnillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
