import { TestBed } from '@angular/core/testing';

import { TrainingPackageService } from './training-packages.service';

describe('TrainingPackageService', () => {
  let service: TrainingPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
