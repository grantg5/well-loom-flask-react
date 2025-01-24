import { TestBed } from '@angular/core/testing';

import { GetAreasService } from './get-areas.service';

describe('GetAreasService', () => {
  let service: GetAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
