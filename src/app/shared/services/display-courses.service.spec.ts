import { TestBed } from '@angular/core/testing';

import { DisplayCoursesService } from './display-courses.service';

describe('DisplayCoursesService', () => {
  let service: DisplayCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
