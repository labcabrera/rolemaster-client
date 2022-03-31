import { TestBed } from '@angular/core/testing';

import { StrategicSessionsService } from './sessions.service';

describe('SessionsService', () => {
  let service: StrategicSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategicSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
