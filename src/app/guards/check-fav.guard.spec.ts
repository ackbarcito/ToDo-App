import { TestBed } from '@angular/core/testing';

import { CheckFavGuard } from './check-fav.guard';

describe('CheckFavGuard', () => {
  let guard: CheckFavGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckFavGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
