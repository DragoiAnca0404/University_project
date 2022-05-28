import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormGradeComponent } from './add-form-grade.component';

describe('AddFormGradeComponent', () => {
  let component: AddFormGradeComponent;
  let fixture: ComponentFixture<AddFormGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
