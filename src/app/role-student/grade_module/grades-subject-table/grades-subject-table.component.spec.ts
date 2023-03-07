import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesSubjectTableComponent } from './grades-subject-table.component';

describe('GradesSubjectTableComponent', () => {
  let component: GradesSubjectTableComponent;
  let fixture: ComponentFixture<GradesSubjectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesSubjectTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesSubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
