import { TestBed, inject } from '@angular/core/testing';

import { AmountService } from './amount.service';

describe('AmountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmountService]
    });
  });

  it('should be created', inject([AmountService], (service: AmountService) => {
    expect(service).toBeTruthy();
  }));
});
