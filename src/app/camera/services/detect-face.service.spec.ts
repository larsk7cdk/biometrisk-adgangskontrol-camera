import { TestBed } from '@angular/core/testing';

import { DetectFaceService } from './detect-face.service';

describe('DetectFaceService', () => {
  let service: DetectFaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectFaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
