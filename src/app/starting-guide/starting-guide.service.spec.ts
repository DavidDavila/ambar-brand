import { TestBed } from '@angular/core/testing';

import { StartingGuideService } from './starting-guide.service';

describe('StartingGuideService', () => {
  let service: StartingGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartingGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
