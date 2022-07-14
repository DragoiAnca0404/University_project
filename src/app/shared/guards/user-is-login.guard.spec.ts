import { TestBed } from '@angular/core/testing';

import { UserIsLoginGuard } from './user-is-login.guard';

describe('UserIsLoginGuard', () => {
  let guard: UserIsLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserIsLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
