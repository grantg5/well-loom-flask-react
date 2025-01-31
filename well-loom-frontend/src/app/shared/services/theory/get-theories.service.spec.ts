import { TestBed } from '@angular/core/testing';

import { GetTheoriesService } from './get-theories.service';

describe('GetTheoriesService', () => {
  let service: GetTheoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTheoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
