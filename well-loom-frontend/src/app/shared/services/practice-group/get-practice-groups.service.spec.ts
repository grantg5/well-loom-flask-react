import { TestBed } from '@angular/core/testing';

import { GetPracticeGroupsService } from './get-practice-groups.service';

describe('GetPracticeGroupsService', () => {
  let service: GetPracticeGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPracticeGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
