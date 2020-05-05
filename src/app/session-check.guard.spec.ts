import { TestBed, async, inject } from '@angular/core/testing';

import { SessionCheckGuard } from './session-check.guard';

describe('SessionCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionCheckGuard]
    });
  });

  it('should ...', inject([SessionCheckGuard], (guard: SessionCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
