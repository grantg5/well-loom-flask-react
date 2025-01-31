import { TestBed } from '@angular/core/testing';

import { GetChallengesService } from './get-challenges.service';

describe('GetChallengesService', () => {
  let service: GetChallengesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChallengesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
