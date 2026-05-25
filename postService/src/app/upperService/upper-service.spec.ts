import { TestBed } from '@angular/core/testing';

import { UpperService } from './upper-service';

describe('UpperService', () => {
  let service: UpperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
