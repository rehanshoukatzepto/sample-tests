import { TestBed } from '@angular/core/testing';

import { AddTestService } from './add-test.service';

describe('AddTestService', () => {
  let service: AddTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
