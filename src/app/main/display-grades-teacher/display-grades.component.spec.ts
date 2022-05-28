import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGradesComponent } from './display-grades.component';

describe('DisplayGradesComponent', () => {
  let component: DisplayGradesComponent;
  let fixture: ComponentFixture<DisplayGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
