import { TestBed } from '@angular/core/testing';

import { GetPracticesService } from './get-practices.service';

describe('GetPracticesService', () => {
  let service: GetPracticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPracticesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
