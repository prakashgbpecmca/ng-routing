import { TestBed, async, inject } from '@angular/core/testing';

import { ProductEditGuardGuard } from './product-edit-guard.guard';

describe('ProductEditGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEditGuardGuard]
    });
  });

  it('should ...', inject([ProductEditGuardGuard], (guard: ProductEditGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
